/** @jsx h */
import { h } from "preact";
import { useEffect } from "preact/hooks";

export interface DomInspectorOptions {
  outline: string;
  activator: (event: KeyboardEvent) => boolean;
}

export const DomInspectorActivators = {
  CmdE: (event: KeyboardEvent) =>
    (event.ctrlKey && event.key === "e") ||
    (event.metaKey && event.key === "e"),
  Backquote: (event: KeyboardEvent) => event.code === "Backquote",
};

export class DomInspector {
  private element: HTMLElement;
  private hoveredElement?: HTMLElement;
  private options: DomInspectorOptions;
  private active = false;

  constructor(
    element: HTMLElement,
    options: DomInspectorOptions = {
      outline: "2px dashed #2fd080",
      activator: DomInspectorActivators.Backquote,
    },
  ) {
    if (!element) {
      throw Error("Document element is required to create a a dom inspector");
    }

    this.options = options;
    this.element = element;
    element.addEventListener("keydown", this.handleActivate, true);
  }

  /**
   * Add event listeners for DOM-inspectorey actions
   */
  addEventListeners() {
    const { element } = this;

    element.addEventListener("mouseover", this.handleMouseOver, true);
    element.addEventListener("mouseout", this.handleMouseOut, true);
    element.addEventListener("click", this.handleClick, true);
    element.addEventListener("keydown", this.handleCancelKey, true);
  }

  handleMouseOver = (event: MouseEvent) => {
    const targetElement = event.target as HTMLElement;
    if (!targetElement) {
      return;
    }

    // Set outline:
    targetElement.style.outline = this.options.outline;

    // Set last selected element so it can be 'deselected' on mouseout.
    this.hoveredElement = targetElement;
  };

  handleMouseOut = (event: MouseEvent) => {
    const targetElement = event.target as HTMLElement;

    // Remove outline from element:
    targetElement.style.outline = "";
  };

  handleClick = async (event: MouseEvent) => {
    event.preventDefault();
    const targetElement = event.target as HTMLElement;

    // Recover the outerHTML of the element removing artificial outline
    targetElement.style.outline = "";
    if (!targetElement.getAttribute("style")) {
      targetElement.removeAttribute("style");
    }
    const outerHTML = targetElement.outerHTML;
    // Send outerHTML to server
    const link = await fetch("/inspect-vscode", {
      method: "POST",
      body: outerHTML,
    }).then((res) => res.text());
    // Navigate to vscode link
    window.location.href = link;
  };

  handleCancelKey = (event: KeyboardEvent) => {
    if (event.key !== "Escape") {
      return;
    }
    console.log(
      "InspectVSCode deactivated.",
    );

    const { element, hoveredElement } = this;

    element.removeEventListener("mouseover", this.handleMouseOver, true);
    element.removeEventListener("mouseout", this.handleMouseOut, true);
    element.removeEventListener("click", this.handleClick, true);
    element.removeEventListener("keydown", this.handleCancelKey, true);

    // Remove outline on last-selected element
    if (hoveredElement) {
      hoveredElement.style.outline = "";
    }

    this.active = false;
  };

  handleActivate = (event: KeyboardEvent) => {
    if (this.options.activator(event) && !this.active) {
      this.addEventListeners();
      this.active = true;
      console.log(
        "InspectVSCode activated. Hover any element and click to open it in VSCode directly. Press ESCAPE to deactivate.",
      );
    }
  };
}

declare global {
  interface Window {
    inspectVSCode: DomInspector;
  }
}

export default function InspectVSCode() {
  useEffect(() => {
    window.inspectVSCode = new DomInspector(document.body);
  });
  return <span></span>;
}

/** @jsx h */
import { h } from "preact";
import { useEffect } from "preact/hooks";
import { DomInspector } from "../../InspectVSCode.tsx";

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

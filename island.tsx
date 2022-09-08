import { useEffect } from "preact/hooks";
import DomInspector from "./inspector.ts";

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

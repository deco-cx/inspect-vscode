# Inspect in VSCode

This is a simple extension for [deno/fresh](https://fresh.deno.dev) projects that allows you to inspect your components' source code in VSCode. This repository includes a sample site to show how it works. Activate the extension with `backquote` (\`) and click on any component. Your browser will attempt to navigate to the source code file in your project.

![Demo gif showing inspect to vscode](https://raw.githubusercontent.com/deco-cx/inspect-vscode/f2113667e7b6fb5105d2d6e809628a5900fe7f67/example/static/demo.gif)

This is a native feature in [`live`](https://github.com/deco-cx/live), the upcoming deno-native CMS.

### Usage

Start the project:

```
cd example/
deno task start
```

Go to https://localhost:8080

Now hit the backquote key (`) and click on any DOM Element while the project is open in VSCode. Your browser should navigate to VSCode and open the correct file and line.

### Implementing in your project

- Add `"inspect_vscode/": "https://deno.land/x/inspect_vscode@0.1.0/"` and `"std/":"https://deno.land/std@0.148.0/"` to your `import_map.json` file.

- Create `islands/InspectVSCode.tsx`:

```tsx
/** @jsx h */
import InspectVSCode from "inspect_vscode/island.tsx";

export default InspectVSCode;
```

- Create `routes/_live/inspect.ts`:

```tsx
import inspectVSCodeHandler from "inspect_vscode/handler.ts";

export const handler = inspectVSCodeHandler;
```

- Import `islands/InspectVSCode.tsx` in a route and render it.

Done!

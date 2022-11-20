# Inspect in VSCode

This is a simple extension for [deno/fresh](https://fresh.deno.dev) projects that allows you to inspect your components' source code in VSCode. This repository includes a sample site to show how it works. Activate the extension with `backquote` (\`) and click on any component. Your browser will attempt to navigate to the source code file in your project.

![Demo gif showing inspect to vscode](https://raw.githubusercontent.com/deco-cx/inspect-vscode/f2113667e7b6fb5105d2d6e809628a5900fe7f67/example/static/demo.gif)

This is a native feature in [`live`](https://github.com/deco-cx/live), the edge-native DXP.
Right now, it depends on having a wrapper `div` on each component to locate the source in the filesystem, which is put in place by the `live` renderer.

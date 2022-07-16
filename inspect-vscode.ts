import { Handlers } from "$fresh/server.ts";
import { join } from "std/path/mod.ts";

export const handler: Handlers = {
  async POST(req) {
    const outerHTML = await req.text();
    const { fullpath, lineNumber, column } = await grep(outerHTML);
    const link = vsCodeLinkFromResult(fullpath, lineNumber, column);

    return new Response(link, {
      headers: { "Content-Type": "text/html" },
    });
  },
};

function vsCodeLinkFromResult(file: string, line: number, column: number) {
  return `vscode://file/${file}:${line}:${column}`;
}

async function grep(content: string) {
  const escaped = content.replace(/>.*/, ">");
  let longest;
  let proc = Deno.run({
    cmd: [
      "grep",
      "-RHn",
      "--include",
      "\*.tsx",
      "--colour=none",
      escaped,
      ".",
    ],
    stdout: "piped",
    stderr: "piped",
  });

  const status = await proc.status();

  // If we can't find an exact match for the first tag, try to find the longest attribute
  if (!status.success) {
    const attributes = escaped.split('"');
    longest = attributes.reduce((acc, curr, i) => {
      if (i % 2 !== 0) {
        return acc.length > curr.length ? acc : curr;
      }
      return acc;
    }, "");
    console.warn(`grep failed searching for entire tag: ${escaped}`);
    console.warn(`falling back to grep with longest attribute: "${longest}"`);
    proc.close();
    proc = Deno.run({
      cmd: [
        "grep",
        "-RHn",
        "--include",
        "\*.tsx",
        "--colour=none",
        `"${longest}"`,
        ".",
      ],
      stdout: "piped",
      stderr: "piped",
    });
    const secondTryStatus = await proc.status();
    if (!secondTryStatus.success) {
      throw new Error(
        `grep failed searching for longest attribute:\n${longest}`,
      );
    }
  }

  const out = await proc.output();
  const decoded = new TextDecoder().decode(out);
  proc.close();
  const [file, ln, rest] = decoded.split(":");
  const column = rest.search(/\S|$/) + 1;
  const lineNumber = parseInt(ln);
  const fullpath = join(Deno.cwd(), file);

  return { fullpath, lineNumber, column };
}

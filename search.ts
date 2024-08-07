import { join } from "@std/path";
import Fuse from "npm:fuse.js@7.0.0";

export async function search(content: string, manifestKey: string) {
  const escaped = content.replace(/>.*/, ">");
  const srcFile = await Deno.readTextFile(manifestKey);
  const srcLines = srcFile.split("\n");
  const fuse = new Fuse(srcLines);
  const [bestResult] = fuse.search(escaped);
  const lineNumber = (bestResult?.refIndex ?? 0) + 1;
  const column = (bestResult?.item.search(/\S/) ?? 0) + 1;
  const fullpath = join(Deno.cwd(), manifestKey);

  return { fullpath, lineNumber, column };
}

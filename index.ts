import { getFiles } from "./src/parse/files";
import { HeadersFiles } from "./src/headers";

export type CodeError = {
  file: string;
  line: number;
  error: string;
}

async function main() {
  const headers = new HeadersFiles();
  let array: string[] = [];

  array = await getFiles(".", "h");
  headers.run(array);
}

main();

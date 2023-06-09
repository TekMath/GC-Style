import { getFiles } from "./src/parse/files";
import { HeadersFiles } from "./src/headers";
import { exportDisplayErrors } from "./src/export/display";
import { exportFileErrors } from "./src/export/file"

export type CodeError = {
  file: string;
  line: number;
  error: string;
}

async function main() {
  const headers = new HeadersFiles();
  let array: string[] = [];
  let errors: CodeError[] = [];

  array = await getFiles(".", "h");
  errors = errors.concat(headers.run(array));

  exportDisplayErrors(errors);
  exportFileErrors(errors);
}

main();

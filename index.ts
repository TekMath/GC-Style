import { getFiles } from "./src/files";

let array: string[] = [];

async function main() {
  array = await getFiles(".", "h");
  console.log(array);
}

main();

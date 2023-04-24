import { logs } from "../../utils/logs"
import { CodeError } from "@/index";

/**
 * Check if there are coding-style errors in macro/definition params
 * @param file Header file that must be check
 * @returns Array of errors
 */
function definitionsParams(file: string): CodeError[] {
    const fileExtention = file.split(".");
    let errorsArray: CodeError[] = [];

    if (fileExtention.length < 2 || fileExtention.at(-1) != "h") {
        logs.error("File extention", "The file must be a header");
        return [];
    }
    return errorsArray;
}

export { definitionsParams };

import { logs } from "../../utils/logs"
import { CodeError } from "@/index";
import { getLines } from "../../../src/parse/content";

/**
 * Check if a definition/macro has params
 * @param lineArray Array of this line split by space
 * @returns True if there are one param or more, else False
 */
function hasParams(lineArray: string[]): boolean {
    const definition: string = lineArray[1];
    const definitionSplit: string[] = definition.split("(");

    if (definitionSplit.length <= 1)
        return false;
    return true;
}

function unusedParams(fileContent: string): CodeError | undefined {
    const lines: string[] = getLines(fileContent);

    for (const line of lines) {
        const lineArray: string[] = line.split(" ");

        if (lineArray[0] != "#define")
            continue;
        if (hasParams(lineArray))
            console.log(line);
    }
    return undefined;
}

/**
 * Check if there are coding-style errors in macro/definition params
 * @param fileContent Content of a header file
 * @returns Array of errors
 */
function definitionsParams(fileContent: string): CodeError[] {
    let errorsArray: CodeError[] = [];
    let error: CodeError | undefined;

    error = unusedParams(fileContent);
    if (error)
        errorsArray.push(error);
    return errorsArray;
}

export { definitionsParams };

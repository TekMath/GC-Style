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

function unusedParams(fileContent: string): CodeError[] | undefined {
    const lines: string[] = getLines(fileContent);
    let params: string[] = [];
    let arrayIndex: number = 1;
    let errors: CodeError[] = [];
    let lineIndex = 0;

    for (const line of lines) {
        const lineArray: string[] = line.split(" ");

        lineIndex++;
        arrayIndex = 1;
        params = [];
        if (lineArray[0] != "#define" || !hasParams(lineArray))
            continue;
        params.push(lineArray[1].split("(")[1].replace(')', ''));
        while (params.at(-1)?.at(-1) == ',') {
            params[params.length - 1] = params[params.length - 1].replace(',', '');
            arrayIndex += 1;
            params.push(lineArray[arrayIndex].replace(')', ''));
        }
        for (const param of params) {
            let occurenceFind: boolean = false;

            while (arrayIndex < lineArray.length - 1) {
                arrayIndex += 1;

                if (lineArray[arrayIndex].includes(param)) {
                    occurenceFind = true;
                    break;
                }
            }
            if (!occurenceFind) {
                const error: CodeError = {
                    file: "undefined",
                    line: lineIndex,
                    error: "D5 - Macros: Params unused."
                };
                errors.push(error);
            }
        }
        console.log(errors);
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
    let errors: CodeError[] | undefined;

    errors = unusedParams(fileContent);
    if (errors)
        errorsArray.concat(errors);
    return errorsArray;
}

export { definitionsParams };

/**
 * Remove all spaces at the start & the end of a string
 * @param line Line that must be clean
 * @returns New string
 */
function cleanSpaces(line: string): string {
    let newLine: string = "";
    let reverseString: string = "";
    let first_letter: boolean = false;

    for (const letter of line) {
        if (letter != " " || first_letter) {
            newLine += letter;
            first_letter = true;
        }
    }
    reverseString = newLine.split("").reverse().join("");
    newLine = "";
    first_letter = false;
    for (const letter of reverseString) {
        if (letter != " " || first_letter) {
            newLine += letter;
            first_letter = true;
        }
    }
    return newLine.split("").reverse().join("");
}

/**
 * Get all lines of a file content
 * @param content File content
 */
function getLines(content: string): string[] {
    let line: string = "";
    let lines: string[] = [];

    for (const letter of content) {
        if (letter == "\n" || letter == "\r") {
            if (line.length <= 0)
                continue;
            line = cleanSpaces(line);
            lines.push(line);
            line = "";
        } else {
            line += letter;
        }
    }
    return lines;
}

export { getLines }

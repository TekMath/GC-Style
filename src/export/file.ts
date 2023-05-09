import * as fs from 'fs';
import { CodeError } from "../../index";
import { logs } from '../utils/logs';

function exportFileErrors(errors: CodeError[]) {
    let exportString: string = "";
    let exportFile = "gc-style-report.log";

    for (const error of errors) {
        exportString += `${error.file}:${error.line} - ${error.error}\n`;
    }
    fs.writeFile(exportFile, exportString, err => {
        if (err)
            logs.error("Export file", <string><unknown>err);
    });
}

export { exportFileErrors };

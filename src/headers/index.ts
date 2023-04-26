import * as fs from 'fs';
import { CodeError } from "../../index";
import { logs } from "../utils/logs"
import { definitionsParams } from "./definitions/params";

class HeadersFiles {
    run(filesArray: string[]): CodeError[] {
        let errorsArray: CodeError[] = []; 

        for (const file of filesArray) {
            const fileExtention = file.split(".");
            const fileContent = fs.readFileSync(file,'utf8');
            let errors: CodeError[] = []; 

            if (fileExtention.length < 2 || fileExtention.at(-1) != "h") {
                logs.error("File extention", "The file must be a header");
                return [];
            }
            errors = definitionsParams(fileContent);
            for (const index in errors) {
                errors[index].file = file;
            }
            errorsArray = errorsArray.concat(errors);
        }
        return errorsArray;
    }
}

export { HeadersFiles };

import { CodeError } from "@/index";
import { definitionsParams } from "./definitions/params";

class HeadersFiles {
    run(filesArray: string[]): CodeError[] {
        let errorsArray: CodeError[] = []; 

        for (const file of filesArray) {
            errorsArray.concat(definitionsParams(file));
        }
        return errorsArray;
    }
}

export { HeadersFiles };

import * as fs from "fs";
import { logs } from "./utils/logs"

/**
 * 
 * @param directoryPath Directory path of the search
 * @param extention Extention of the files that must be takes
 * @returns Array of files names
 */
async function getFiles(directoryPath: string, extention: string): Promise<string[]> {
    let filesArray: string[] = [];
    const files = await fs.promises.readdir(directoryPath);

    await Promise.all(
        files.map(async (file) => {
            const fileExtention: string = file.split(".")[1];
            const fullPath: string = `${directoryPath}/${file}`;
        
            if (fs.lstatSync(fullPath).isDirectory()) {
                const array = await getFiles(fullPath, extention);

                filesArray = filesArray.concat(array);
            } else if (fileExtention == extention) {
                filesArray.push(file);
            }
        })
    ).catch((err) => {
        logs.error("Invalid folder", <string><unknown>err);
    });
    return filesArray;
}

export { getFiles };

import { CodeError } from "../../index";

function exportDisplayErrors(errors: CodeError[]) {
    const styleIcon = "🫐";
    const styleName = "GC style"
    const errorsTotal = errors.length;

    for (const error of errors) {
        console.log("%s:\x1b[33m%d\x1b[0m - \x1b[31m%s\x1b[0m",
        error.file, error.line, error.error);
    }
    console.log("[\x1b[34m===\x1b[0m] %s %s | Total: \x1b[31m%d\x1b[0m",
    styleIcon, styleName, errorsTotal);
}

export { exportDisplayErrors };

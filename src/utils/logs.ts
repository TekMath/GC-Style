const errorPrefix: string = "\x1b[31mError: "
const clearColor: string = "\x1b[0m"

/**
 * Display an error with a specific prefix
 * @param title Title of the error
 * @param message Message of the error
 */
function error(title: string, message: string): void {
    console.error(`${errorPrefix}${title}: ${message}${clearColor}`)
}

/**
 * logs object with all display utils functions
 */
const logs = {
    error
}

export { logs };

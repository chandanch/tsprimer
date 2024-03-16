function printLogDetails(log: string | string[] | null) {
    // type check or type guard to check possibility of null value
    // TS will throw error if null check isn't performed
    if (!log) {
        console.log('Log data must be passed');
    } else if (typeof log == 'object') {
        for (const str of log) {
            console.log(str);
        }
    } else {
        console.log(log);
    }
}

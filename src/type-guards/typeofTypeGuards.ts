function printLogDetails(log: string | string[] | null) {
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

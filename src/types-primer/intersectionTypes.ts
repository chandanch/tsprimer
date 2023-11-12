/**
 * Intersection Types: Combines the common properties of both the types and also
 * the unique properties of both the types
 */

type ConsoleLogger = {
    logFilePath: string;
    logLevel: string;
    stdOut: boolean;
    stream: string;
};

type UILogger = {
    logFilePath: string;
    logLevel: string;
    handlerFunc: string;
    response: string;
};

// Here HybridLogger is of intersection type
type HybridLogger = ConsoleLogger & UILogger;

// the hybridLogger object has the common properties of both ConsoleLogger & UILogger
// it also has all the properties which are unique between ConsoleLogger & UILogger
const hybridLogger: HybridLogger = {
    logFilePath: 'deded',
    logLevel: 'debug',
    stdOut: true,
    stream: 'ee/dee',
    handlerFunc: 'streamlogs',
    response: 'json',
};

// In the below example TS gives an error since it does not include the properties of UILogger
// const hybridLogger3: HybridLogger = {
//     logFilePath: 'deded',
//     logLevel: 'debug',
//     stdOut: true,
//     stream: 'ee/dee',
// };

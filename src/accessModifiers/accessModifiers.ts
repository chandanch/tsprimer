/**
 * Access Modifiers: Control and restrict the access of properties and methods of a class to
 * the child or sub class and as well as outside of a class
 * In TS there are 3 access modifiers: Public, Protected & Private
 * By default all members (properties & methods) are public
 */

class LogManager {
    // private member, cannot be accessed outside this class
    private logPath: string;
    // public member, can be accessed outside the class
    public logLevel: string;
    // protected member, can be accessed within class and by subclass or child class
    protected dependency: string;

    constructor(logPath: string, logLevel: string, dependency: string) {
        this.logPath = logPath;
        this.logLevel = logLevel;
        this.dependency = dependency;
    }
}

const streamLogger = new LogManager('/data', 'debug', 'nodeps');

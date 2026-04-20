export class Logger {
     static readonly SHOW_LOGS: boolean = (process.env.SHOW_LOG ?? 'true').toLowerCase() === 'true';
     /** logs general information (default console.log) */
     static log(...args: any[]): void {
         if (Logger.SHOW_LOGS) {
             console.log(...args);
         }
     }

     /**Log information messages */
     static info(...args: any[]): void {
            if (Logger.SHOW_LOGS) {
                console.info(...args);
            }   
        }
    static debug(...args: any[]): void {
        if (Logger.SHOW_LOGS) {
            console.debug(...args);
        } 
    }
        /**Log warning messages */
        static warn(...args: any[]): void {
            if (Logger.SHOW_LOGS) {
                console.warn(...args);
            }
        }

        /**Log error messages */
        static error(...args: any[]): void {
            if (Logger.SHOW_LOGS) {
                console.error(...args);
            }
        }

        /**Log stack traces */
        static trace(...args: any[]): void {
            if (Logger.SHOW_LOGS) {
                console.trace(...args);
            }   
        }   

        
        static logData(_title: string, _data: any): void {}
        static logResult(_icon: string, _message: string, _data: any): void {}

        /** Logs tabular data as a table (console.table)
         * @param tabularData The data to be logged in tabular format (array of objects or array of arrays)
         * @param properties An optional array of property names to include in the table
         */
        static table(tabularData: any, properties?: string[] ): void {
            if (Logger.SHOW_LOGS) {
                console.table(tabularData, properties);
            }   
            }

        /** Starts a new inline group */
        static group(...label: any[]): void {
            if (Logger.SHOW_LOGS) {
                console.group(...label);
            }
        }
         
        /** Ends the current inline group */
        static groupEnd(): void {
            if (Logger.SHOW_LOGS) {
                console.groupEnd();
            }
        }

            /** Starts a new collapsed group */
        static time(label?: string): void {
            if (Logger.SHOW_LOGS) {
                console.time(label);
            }
        }

            /** Ends the current collapsed group and logs the time taken */
        static timeEnd(label?: string): void {
            if (Logger.SHOW_LOGS) {
                console.timeEnd(label);
            }
        }


}
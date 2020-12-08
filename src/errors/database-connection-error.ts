import { CustomError } from './custom-error';

// export class DatabaseConnectionError extends CustomError implements CustomErr{
export class DatabaseConnectionError extends CustomError {
    statusCode = 500;
    reason = 'Error connecting to database';

    constructor() {
        super('Error connecting to db');

        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    serializeErrors() {
         return [{ message: this.reason }];
    }
}


//v1 interface used in capture typing err and make sure what is here is stoned as blueprint for above

interface CustomErr{
    statusCode: number;
    serializeErrors(): {
        message: string;
        field ?: string;
    }[]
}

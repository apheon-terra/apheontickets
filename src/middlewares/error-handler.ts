import { RequestValidationError } from './../errors/request-validation-error';
import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';
import { DatabaseConnectionError } from '../errors/database-connection-error';

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    //v1 of sublasing errors
    // if (err instanceof RequestValidationError)
    //{
    //     console.log('error 1 req val err')

    //v2

    // const formatErrors = err.errors.map(error => {
    //     return
    //     { message: error.msg, field: error.param } })
    
    //formattedErrors is now a ne array of objects with fixed structure defined above
    // return res.status(400).send({ errors: formattedErrors });
    // }

    // if (err instanceof DatabaseConnectionError) {
    
    // return res.status(500).send( { errors: [ {message:err.reason} ] } );

    
    //v3 of 
        // return res.status(err.statusCode).send({ errors: err.serializeErrors() });


    //     console.log('error 1 db val err')
    // }

    //v4
    if (err instanceof CustomError) {//using instanceof courtesy of abstract class 
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }

    return res.status(400).send({
        errors: [{ message: 'Something went wrong' }],
    });
};




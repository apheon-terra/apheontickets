import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
    id: string;
    email: string;
}

declare global {
    namespace Express {
        interface Request {//just added an extra property not extended
            currentUser?: UserPayload;
        }
    }
}

export const currentUser = (
    req: Request,
    res: Response,
    next: NextFunction
) => {    //if no session object
    //check first if session is defined then if it is check if we have a jwt property formed/defined
    // if x || y
    if (!req.session?.jwt) {
        return next();//move to next middleware
    }

    try {//decode it
        const payload = jwt.verify(
            req.session.jwt,
            process.env.JWT_KEY!//ts proofed
        ) as UserPayload;
        req.currentUser = payload;//a property to describe who the current user is inside an express application 
    } catch (err) { }

    next();//whether or not we decode or throw error we still want to continue to next middleware
};

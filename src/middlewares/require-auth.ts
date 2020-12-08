import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError } from '../errors/not-authorized-error';
//rej req if usr is not logged in 
export const requireAuth = (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    //v1
    // if (!req.currentUser) {
    //     return res.status(401).send();
    // }

    if (!req.currentUser) {
        throw new NotAuthorizedError();
    }

    next();
};

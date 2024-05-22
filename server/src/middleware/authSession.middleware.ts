import { Request, Response, NextFunction } from "express";

function authSessionMiddleware(req:Request, res:Response, next:NextFunction) {
    if(req.session || req.isAuthenticated()) {
        next()
    } else {
        res.status(401).json({message: "You are not authenticated"})
    }
}

export {authSessionMiddleware}
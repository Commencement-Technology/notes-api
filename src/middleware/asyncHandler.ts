import { Request, Response, NextFunction } from "express";

type fn = (req: Request, res: Response, next: NextFunction) => void

function asyncHandler(fn: fn) {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
}

export default asyncHandler;

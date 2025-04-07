import { NextFunction, Request, Response } from 'express';

interface error extends Error {
    status?: number;
    isOperational?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = async (err: error, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.status || 500;
    const message = err.message || 'Internal Server Error';

    // Log the error (you might want to use a more advanced logging solution)
    console.error(err);

    res.status(statusCode).json({ status: 'error', statusCode, message });
};

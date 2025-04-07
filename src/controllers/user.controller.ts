import { NextFunction, Request, Response } from 'express';

import { getUserData } from '../services/user.service.js';

export const getDataController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await getUserData();
        res.status(200).send(response);
    } catch (err) {
        next(err);
    }
};

import { NextFunction, Request, Response } from 'express';

import { getAllGroceries } from '../services/groceries.service.js';
import { createUserOrder } from '../services/user.service.js';

// To get the groceries for user controller
export const getAllGroceriesController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await getAllGroceries();
        res.status(200).send(response);
    } catch (err) {
        next(err);
    }
};

// To create the order for user
export const createUserOrderController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await createUserOrder();
        res.status(200).send(response);
    } catch (err) {
        next(err);
    }
};

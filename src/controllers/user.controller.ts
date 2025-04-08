import { RequestHandler } from 'express';

import { getAllGroceriesItems } from '../services/admin.service.js';
import { createUserOrder } from '../services/user.service.js';
import { createUserOrderBodyParams } from '../types/user.types.js';

// To get the groceries for user controller
export const getAllGroceriesController: RequestHandler = async (req, res, next) => {
    try {
        const response = await getAllGroceriesItems();
        res.status(200).send(response);
        return;
    } catch (err) {
        next(err);
    }
};

// To create the order for user
export const createUserOrderController: RequestHandler<object, object, createUserOrderBodyParams, object> = async (req, res, next) => {
    try {
        const { grocery_item_id, quantity } = req.body;
        const userId = req.headers['x-user-id'];
        if (!(userId && typeof userId === 'string') || !grocery_item_id || !quantity) {
            res.status(400).send({ error: 'Invalid params' });
            return;
        }
        const response = await createUserOrder(Number(userId), grocery_item_id, quantity);
        res.status(200).send(response);
        return;
    } catch (err) {
        next(err);
    }
};

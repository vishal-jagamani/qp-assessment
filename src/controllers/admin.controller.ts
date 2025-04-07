import { NextFunction, Request, Response } from 'express';

import { getAllGroceries } from '../services/groceries.service.js';

// To get all the groceries for admin
export const getAllGroceriesForAdminController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await getAllGroceries();
        res.status(200).send(response);
    } catch (err) {
        next(err);
    }
};

// To add the grocery item by admin
export const createGroceryController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log('Grocery added');
        res.status(200).send('Grocery added');
    } catch (err) {
        next(err);
    }
};

// To update the grocery item by admin
export const updateGroceryController = async (req: Request<{ id: string }, object, object, object>, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        if (!id) res.status(400).send({ error: 'Invalid params' });
        console.log('Grocery updated');
        res.status(200).send('Grocery updated');
    } catch (err) {
        next(err);
    }
};

// To delete the grocery item by admin
export const deleteGroceryController = async (req: Request<{ id: string }, object, object, object>, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        if (!id) res.status(400).send({ error: 'Invalid params' });
        console.log('Grocery deleted');
        res.status(200).send('Grocery deleted');
    } catch (err) {
        next(err);
    }
};

// To update the grocery item inventory by admin
export const updateInventoryController = async (req: Request<{ id: string }, object, object, object>, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        if (!id) res.status(400).send({ error: 'Invalid params' });
        console.log('Grocery inventory updated');
        res.status(200).send('Grocery inventory updated');
    } catch (err) {
        next(err);
    }
};

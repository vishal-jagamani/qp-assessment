import { RequestHandler } from 'express';

import { addGroceryItem, deleteGroceryItem, getAllGroceriesItems, updateGroceryItem, updateInventory } from '../services/admin.service.js';
import { addGroceryItemBodyParams } from '../types/grocery.types.js';

// To get all the groceries for admin
export const getAllGroceriesForAdminController: RequestHandler = async (req, res, next) => {
    try {
        const response = await getAllGroceriesItems();
        res.status(200).send(response);
        return;
    } catch (err) {
        next(err);
    }
};

// To add the grocery item by admin
export const createGroceryController: RequestHandler<object, object, addGroceryItemBodyParams, object> = async (req, res, next) => {
    try {
        const { name, description, price, quantity } = req.body;
        if (!name || !price || !quantity) {
            res.status(400).send({ error: 'Invalid params' });
            return;
        }
        const payload = { name, description: description || '', price, quantity };
        const response = await addGroceryItem(payload);
        res.status(201).send(response);
        return;
    } catch (err) {
        next(err);
    }
};

// To update the grocery item by admin
export const updateGroceryController: RequestHandler<{ id: string }, object, addGroceryItemBodyParams, object> = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, price, quantity } = req.body;
        if (!id || !name || !price || !quantity) {
            res.status(400).send({ error: 'Invalid params' });
            return;
        }
        const response = await updateGroceryItem(req.body, id);
        res.status(200).send(response);
        return;
    } catch (err) {
        next(err);
    }
};

// To delete the grocery item by admin
export const deleteGroceryController: RequestHandler<{ id: string }, object, object, object> = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).send({ error: 'Invalid params' });
            return;
        }
        const response = await deleteGroceryItem(id);
        res.status(200).send(response);
        return;
    } catch (err) {
        next(err);
    }
};

// To update the grocery item inventory by admin
export const updateInventoryController: RequestHandler<{ id: string }, object, { quantity: number }, object> = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { quantity } = req.body;
        if (!id || !quantity) {
            res.status(400).send({ error: 'Invalid params' });
            return;
        }
        const response = await updateInventory(id, quantity);
        res.status(200).send(response);
        return;
    } catch (err) {
        next(err);
    }
};

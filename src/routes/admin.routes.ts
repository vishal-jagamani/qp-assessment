import { Router } from 'express';

import {
    createGroceryController,
    deleteGroceryController,
    getAllGroceriesForAdminController,
    updateGroceryController,
    updateInventoryController,
} from '../controllers/admin.controller.js';

const router = Router();

router.get('/groceries', getAllGroceriesForAdminController);

router.post('/groceries', createGroceryController);

router.put('/groceries/:id', updateGroceryController);

router.delete('/groceries/:id', deleteGroceryController);

router.patch('/groceries/:id/stock', updateInventoryController);

export default router;

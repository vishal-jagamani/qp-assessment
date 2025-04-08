import { addGroceryItemBodyParams } from '../types/grocery.types.js';
import { supabaseCreate, supabaseDelete, supabaseGET, supabaseUpdate } from './supabase.client.js';

export const getAllGroceriesItems = async () => {
    try {
        const { data } = await supabaseGET('grocery_items');
        return data || [];
    } catch (err) {
        console.log('Error in getAllGroceries service', err);
        throw err;
    }
};

export const addGroceryItem = async (details: addGroceryItemBodyParams) => {
    try {
        const row = {
            ...details,
            created_at: Math.floor(Date.now() / 1000),
            updated_at: Math.floor(Date.now() / 1000),
        };
        const data = await supabaseCreate('grocery_items', row);
        return { status: true, message: 'Grocery item added', data };
    } catch (err) {
        console.log('Error in addGroceryItem service', err);
        throw err;
    }
};

export const updateGroceryItem = async (details: addGroceryItemBodyParams, id: string) => {
    try {
        const row = {
            ...details,
            updated_at: Math.floor(Date.now() / 1000),
        };
        await supabaseUpdate('grocery_items', row, Number(id));
        return { status: true, message: 'Grocery item updated' };
    } catch (err) {
        console.log('Error in updateGroceryItem service', err);
        throw err;
    }
};

export const deleteGroceryItem = async (id: string) => {
    try {
        await supabaseDelete('grocery_items', Number(id));
        return { status: true, message: 'Grocery item deleted' };
    } catch (err) {
        console.log('Error in deleteGroceryItem service', err);
        throw err;
    }
};

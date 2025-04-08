import { supabaseGET } from './supabase.client.js';

export const getAllGroceries = async () => {
    try {
        const { data } = await supabaseGET('grocery_items');
        return data || [];
    } catch (err) {
        console.log('Error in getAllGroceries service', err);
        throw err;
    }
};

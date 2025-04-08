import { supabaseCreate, supabaseGetById, supabaseUpdate } from './supabase.client.js';

export const createUserOrder = async (user_id: number, grocery_item_id: number, quantity: number) => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const availableStock = (await supabaseGetById('grocery_items', grocery_item_id, 'quantity')) as any;
        const grocery = availableStock.data?.[0];
        if (grocery && grocery?.quantity > quantity) {
            const row = { user_id, created_at: Math.floor(Date.now() / 1000), updated_at: Math.floor(Date.now() / 1000) };
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const data = (await supabaseCreate('orders', row)) as any;
            const order = data.data?.[0];
            const orderItemRow = {
                order_id: order.id,
                grocery_item_id,
                quantity,
                created_at: Math.floor(Date.now() / 1000),
                updated_at: Math.floor(Date.now() / 1000),
            };
            await supabaseCreate('order_items', orderItemRow);
            // Update inventory quantity
            const updatedGroceryRow = { quantity: grocery.quantity - quantity, updated_at: Math.floor(Date.now() / 1000) };
            await supabaseUpdate('grocery_items', updatedGroceryRow, grocery_item_id);
            return { status: true, message: 'Order created successfully' };
        } else {
            return { status: false, message: 'Not enough stock available' };
        }
    } catch (err) {
        console.log('Error in createUserOrder service', err);
        throw err;
    }
};

import { supabaseCreate, supabaseGetById, supabaseUpdate } from './supabase.client.js';

export const createUserOrder = async (user_id: number, items: { grocery_item_id: number; quantity: number }[]) => {
    try {
        const timestamp = Math.floor(Date.now() / 1000);
        for (const item of items) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const stockData = (await supabaseGetById('grocery_items', item.grocery_item_id, 'quantity')) as any;
            const grocery = stockData.data?.[0];

            if (!grocery || grocery.quantity < item.quantity) {
                return {
                    status: false,
                    message: `Item ${item.grocery_item_id} has insufficient stock.`,
                };
            }
        }
        const row = { user_id, created_at: timestamp, updated_at: timestamp };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const orderData = (await supabaseCreate('orders', row)) as any;
        const order = orderData.data?.[0];
        if (!order?.id) {
            throw new Error('Failed to create order');
        }
        for (const item of items) {
            const { grocery_item_id, quantity } = item;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const groceryData = (await supabaseGetById('grocery_items', grocery_item_id, 'quantity, price')) as any;
            const grocery = groceryData.data?.[0];
            const orderItemRow = {
                order_id: order.id,
                grocery_id: grocery_item_id,
                quantity,
                price: grocery.price * quantity,
                created_at: timestamp,
            };
            await supabaseCreate('order_items', orderItemRow);
            const updatedGroceryRow = { quantity: grocery.quantity - quantity, updated_at: timestamp };
            await supabaseUpdate('grocery_items', updatedGroceryRow, grocery_item_id);
        }
        return { status: true, message: 'Order created successfully', order_id: order.id };
    } catch (err) {
        console.log('Error in createUserOrder service', err);
        throw err;
    }
};

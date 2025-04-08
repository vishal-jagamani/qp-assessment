import { createClient } from '@supabase/supabase-js';

import { SupabaseConfig } from '../config/config.js';
import { Database } from '../types/supabase.types.js';

const supabase = createClient<Database>(SupabaseConfig.url, SupabaseConfig.apiKey);

export const supabaseGET = async (table: 'grocery_items' | 'order_items' | 'orders' | 'users') => {
    try {
        const { data, error } = await supabase.from(table).select('*');
        if (error) {
            return { status: false, message: 'Error retrieving data', error };
        }
        return { status: true, data };
    } catch (err) {
        console.error('Error in supabaseGET', err);
        throw err;
    }
};

export const supabaseGetById = async (table: 'grocery_items' | 'order_items' | 'orders' | 'users', id: number, columns?: string) => {
    try {
        const { data, error } = await supabase
            .from(table)
            .select(columns || '*')
            .eq('id', id);
        if (error) {
            return { status: false, message: 'Error retrieving data', error };
        }
        return { status: true, data };
    } catch (err) {
        console.error('Error in supabaseGetById', err);
        throw err;
    }
};

export const supabaseCreate = async (table: 'grocery_items' | 'order_items' | 'orders' | 'users', row: object) => {
    try {
        const { data, error } = await supabase.from(table).insert([row]).select();
        if (error) {
            return { status: false, message: 'Error creating data', error };
        }
        return { status: true, data };
    } catch (err) {
        console.error('Error in supabaseCreate', err);
        throw err;
    }
};

export const supabaseUpdate = async (table: 'grocery_items' | 'order_items' | 'orders' | 'users', row: object, id: number) => {
    try {
        const { data, error } = await supabase.from(table).update(row).eq('id', id);
        if (error) {
            return { status: false, message: 'Error updating data', error };
        }
        return { status: true, data };
    } catch (err) {
        console.error('Error in supabaseUpdate', err);
        throw err;
    }
};

export const supabaseDelete = async (table: 'grocery_items' | 'order_items' | 'orders' | 'users', id: number) => {
    try {
        const { data, error } = await supabase.from(table).delete().eq('id', id);
        if (error) {
            return { status: false, message: 'Error deleting data', error };
        }
        return { status: true, data };
    } catch (err) {
        console.error('Error in supabaseDelete', err);
        throw err;
    }
};

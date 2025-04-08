import { createClient } from '@supabase/supabase-js';

import { SupabaseConfig } from '../config/config.js';

const supabase = createClient(SupabaseConfig.url, SupabaseConfig.apiKey);

export const supabaseGET = async (table: string) => {
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

export const supabaseCreate = async (table: string, row: object) => {
    try {
        const { data, error } = await supabase.from(table).insert([row]);
        if (error) {
            return { status: false, message: 'Error creating data', error };
        }
        return { status: true, data };
    } catch (err) {
        console.error('Error in supabaseCreate', err);
        throw err;
    }
};

export const supabaseUpdate = async (table: string, row: object, id: string) => {
    try {
        const { data, error } = await supabase.from(table).update([row]).eq('id', id);
        if (error) {
            return { status: false, message: 'Error updating data', error };
        }
        return { status: true, data };
    } catch (err) {
        console.error('Error in supabaseUpdate', err);
        throw err;
    }
};

export const supabaseDelete = async (table: string, id: string) => {
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

import dotenv from 'dotenv';
import path from 'path';
dotenv?.config();

export const PORT: string | number = process?.env?.PORT || 8020;

export const ENABLE_AUTH: string = process?.env?.ENABLE_AUTH || 'false';

const envFilePath = path.resolve(process.cwd(), `.env.${process.env.NODE_ENV || 'local'}`);
dotenv?.config({ path: envFilePath });

export const config = {
    url: 'https://catfact.ninja',
};

export const SupabaseConfig: { url: string; apiKey: string } = {
    url: process?.env?.SUPABASE_PROJECT_URL || '',
    apiKey: process?.env?.SUPABASE_API_KEY || '',
};

import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware setup
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests
app.use(express.static(join(__dirname, '/'))); // Serve static files from the '/' directory

import { PORT } from './config/config.js';
import { errorHandler } from './middlewares/error.handler.js';

// Test endpoint
app.get('/testEndpoint', (req: Request, res: Response) => {
    res.send('QuestionPro assessment test endpoint');
});

// Import index route
import indexRoutes from './routes/index.js';

// Use index route
app.use(indexRoutes);

// Middleware to handle 404 errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        error: {
            code: 404,
            message: 'Not Found',
            description: 'The requested resource was not found on the server.',
            suggestedAction: 'Check the resource URL or verify that the resource exists.',
        },
    });
});

// Common error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`QuestionPro assessment server is running on port ${PORT}`);
});

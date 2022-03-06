import express from 'express';
import logger from 'morgan';

import { errorHandler, errorNotFoundHandler } from './middlewares/errorHandler';

// Routes
import router from './routes';
// Create Express server
export const app = express();

// Express configuration
app.set('port', process.env.PORT || 8080);

app.use(logger('dev'));

app.use('/', router);

app.use(errorNotFoundHandler);
app.use(errorHandler);

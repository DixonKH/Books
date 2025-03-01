import express, { urlencoded } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import router from './Router';
import morgan from 'morgan';
import { MORGAN_FORMAT } from './libs/config';

const __filename = fileURLToPath(import.meta.url); // Get the file path of the current module
const __dirname = path.dirname(__filename); // Get the directory path of the current module

/** 1-ENTRANCE */
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));

/** 2-SESSIONS */

/** 3-VIEWS */

/** 4-ROUTES */
app.use('/', router);

export default app;
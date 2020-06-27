import bodyParser      from 'body-parser';
import express         from 'express';

import { initSession } from '../helpers/MangaDexConnection';
import setupRoutes     from '../routes/routes';

import { 
    errorLogger,
    requestLogger,
} from '../logger';

const port = Number(process.env.SERVICE_PORT);
const host = process.env.SERVICE_HOST;

const app = express();

//winston
app.use(errorLogger);
app.use(requestLogger);

//routes
setupRoutes(app);

//body-parser
app.use(bodyParser.json());

app.listen(port, host, () => {
    console.log( `Server running hot 🔥 on port ${ port }` );
    
    initSession();
});

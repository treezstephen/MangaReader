import bodyParser      from 'body-parser';
import express         from 'express';

import { initSession } from '../adapters/MangaDex';
import routes          from '../routes/routes';

import { 
    errorLogger,
    requestLogger,
} from '../logger';

const port = Number(process.env.SERVICE_PORT);
const host = process.env.SERVICE_HOST;

const app = express();

//body-parser
app.use(bodyParser.json());

//winston
app.use(errorLogger);
app.use(requestLogger);

//routes
app.use('/', routes);

app.listen(port, host, () => {
    console.log( `Server running hot 🔥 on port ${ port }` );
    
    initSession();
});

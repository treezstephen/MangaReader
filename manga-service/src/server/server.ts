import express    from 'express';
import bodyParser from 'body-parser';

import { 
    errorLogger,
    requestLogger,
} from './logger';

const port = Number(process.env.SERVICE_PORT);
const host = process.env.SERVICE_HOST;

const app = express();

//winston
app.use(errorLogger);
app.use(requestLogger);

//body-parser
app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.send('MangaService says Hello World');
});

app.listen(port, host, () => {
    console.log( `Server running hot 🔥 on port ${ port }` );
});

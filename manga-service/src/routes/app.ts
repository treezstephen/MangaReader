import { Router } from 'express';
import { OK }     from  'http-status-codes';

const route = Router();

route.get('/', (req, res) => {
    return res.status(OK).send('MangaService says Hello World');
});

export default route;

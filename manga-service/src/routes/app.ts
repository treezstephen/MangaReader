import { Router }         from 'express';
import { OK }             from  'http-status-codes';
import * as MangaProvider from '../adapters/MangaDex';

const route = Router();

route.get('/', (req, res) => {
    return res.status(OK).send('MangaService says Hello World');
});

route.get('/session', async (req, res) => {
    const client = await MangaProvider.getSession();

    const me = await client.getMe();
    
    return res.status(OK).send(me);
});

export default route;

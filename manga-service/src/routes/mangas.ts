import { Router }         from 'express';
import * as MangaProvider from '../adapters/MangaDex';

const route = Router();

route.get('/session', async (req, res) => {
    const client = await MangaProvider.getSession();

    const me = await client.getMe();
    
    return res.status(200).send(me);
});

export default route;

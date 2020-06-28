import { 
    Router, 
    Request, 
    Response, 
} from 'express';
import { OK }             from  'http-status-codes';
import * as MangaProvider from '../adapters/MangaDex';

import Manga, {
    search,
} from '../models/Manga';
import logger                  from '../logger';
import { createErrorResponse } from '../errors';

const route = Router();

route.get('/search', async (request : Request, response : Response) => {
    const {
        query: {
            title,
        },
    } = request;
    
    const searchString = title as string;
    
    try {
        const mangas: Manga[] = await search(searchString);    
        response.status(OK).send(mangas);
    }
    catch (e) {
        logger.error('Error searching MangaService', e);
        createErrorResponse(e, response);
    }
});

route.get('/session', async (req, res) => {
    const client = await MangaProvider.getSession();

    const me = await client.getMe();
    
    return res.status(OK).send(me);
});

export default route;

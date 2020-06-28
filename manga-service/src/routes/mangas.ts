import { 
    Router, 
    Request, 
    Response, 
} from 'express';
import { OK } from  'http-status-codes';


import {
    findManga,
    search,
} from '../models/Manga';
import logger                  from '../logger';
import { createErrorResponse } from '../errors';
import * as MangaProvider      from '../adapters/MangaDex';

const route = Router();

route.get('/:mangaId', async (request : Request, response : Response) => {
    const {
        params: {
            mangaId,
        },
    } = request;
    
    try {
        const manga : Manga = await findManga(mangaId) as Manga;    
        
        const mangaInfo : MangaInfo = await MangaProvider.fetchMangaInfo(manga);
        response.status(OK).send(mangaInfo);
    }
    catch (e) {
        logger.error('Error finding Manga on MangaService', e);
        createErrorResponse(e, response);
    }
});

route.post('/search', async (request : Request, response : Response) => {
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

export default route;

import { Router }         from 'express';
import * as MangaProvider from '../adapters/MangaDex';
import Manga, {
    upsertMangas,
} from '../models/Manga';
import logger from '../logger';

const route = Router();

route.get('/manga', async (req, res) => {
    
    let currentPage   = 1;
    let totalPages    = -1;
    let totalImported = 0;
    
    const delay = ms => new Promise(res => setTimeout(res, ms));
    
    while(currentPage <= totalPages || totalPages === -1) {
        const options = {
            p: currentPage.toString(),
        };
        
        const searchResult : MangaProvider.SearchResultWithLastPage = await MangaProvider.searchMangas(options);
        
        const {
            last_page,
            titles,
        } = searchResult;
        
        const mangas: Manga[] = await upsertMangas(titles);
        
        totalPages = last_page;
        totalImported += mangas.length;
        
        logger.info(`Page ${currentPage} Imported, Total Pages ${totalPages}`);
        
        currentPage++;
        
        if (currentPage % 5 === 0) {
            logger.info('Delay 10 Seconds');
            await delay(10000);
        }
    }
    
    return res.status(200).json({
        totalImported,
    });
});

export default route;

import Mangadex, {
    SearchQuery,
} from 'mangadex-api';
import { SearchResult, Title, MangaDescription } from 'mangadex-api/typings/mangadex';

import logger                  from '../logger';

const PATH_TO_SESSION = './src/session/MANGA_DEX_SESSION.txt';

//Session
const client = new Mangadex({
    apiHost: process.env.MANGA_DEX_API_HOST,
    host:    process.env.MANGA_DEX_HOST,
});

const isSessionExpired = () => {
    return client.agent.checkLogin();
};

export const getSession = () => {
    if (isSessionExpired()) {
        return client;
    }
    else {
        return initSession();
    }
};

export const initSession = async () => {
    let session : boolean; 
    
    try {
        session = await client.agent.login(
            process.env.MANGA_DEX_USERNAME, 
            process.env.MANGA_DEX_PASSWORD, 
            false
        );
    }
    catch(e) {
        logger.error('Failed to Log into MangaDex.', e);
        throw new Error(e);
    }
    
    if (session === false) {
        logger.error('No session found for MangaDex.');
        throw new Error('No session found for MangaDex.');
    }
    
    const me = await client.getMe();
            
    logger.info('Logged into MangaDex as ' + me.username);

    await client.agent.saveSession(PATH_TO_SESSION);
    
    logger.info('Storing MangaDex user session.');
        
    return client;
};

//Fetch
export const fetchMangaInfo = async (manga : Manga) => {
    const client = await getSession();
    
    try {
        const title : Title = await client.getManga(
            manga.id,
            true
        );
        
        return mapToMangoInfo(manga, title);
    }
    catch (e) {
        logger.error('Error finding MangaInfo on MangaDex', e);
        throw new Error(e);
    }
};

//Search
const BASE_SEARCH_QUERY = {
    artist:           undefined,
    author:           undefined,
    demos:            undefined,
    lang_id:          undefined,
    p:                '1',
    statuses:         undefined,
    tag_mode_exc:     undefined,
    tag_mode_inc_all: undefined,
    tags:             undefined,
    title:            undefined,
};

export interface SearchQueryWithPaging extends SearchQuery {
    p: String,
}

export interface SearchResultWithLastPage extends SearchResult {
    last_page: number
}

const getSearchQueryOptions = (options) : SearchQueryWithPaging => {
    return {
        ...BASE_SEARCH_QUERY,
        ...options,
    };
};

export const searchMangas = async (options) => {
    const client = await getSession();
    
    const query: SearchQueryWithPaging = getSearchQueryOptions(options);
    
    try {
        return await client.search(query) as SearchResultWithLastPage;    
    }
    catch(e) {
        logger.error('Error searching MangaDex', e);
        throw new Error(e);
    }
}; 

export interface MangaDescriptionWithAltNames extends MangaDescription {
    alt_names: string[]
}

const mapToMangoInfo = (manga : Manga, title : Title) : MangaInfo => {
    const chapters = title.chapter.filter(c => c.lang_code === process.env.MANGA_DEX_LANG_CODE);
    const mdManga = title.manga as MangaDescriptionWithAltNames;
    
    return {
        _id:          manga._id,
        alt_names:    mdManga.alt_names,
        artist:       mdManga.artist,
        author:       mdManga.author,
        chapters:     chapters,
        cover_url:    mdManga.cover_url,
        description:  mdManga.description,
        genres:       mdManga.genres as Genre[],
        hentai:       mdManga.hentai,
        id:           manga.id,
        lang_flag:    mdManga.lang_flag,
        lang_name:    mdManga.lang_name,
        last_chapter: mdManga.last_chapter,
        links:        mdManga.links as Link[],
        status_text:  mdManga.status_text,
        title:        mdManga.title,
    };
};

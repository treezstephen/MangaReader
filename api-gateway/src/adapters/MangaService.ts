import axios       from 'axios';

const MANGA_SERVICE_URI = process.env.MANGA_SERVICE_URI;

export default class MangaService {
    static async getManga({ mangaId }) {
        const body = await axios.get(`${MANGA_SERVICE_URI}/mangas/${mangaId}`);
        return body.data;
    }   
    
    static async search({ searchString }) {
        const body = await axios.post(`${MANGA_SERVICE_URI}/mangas/search?title=${searchString}`);
        return body.data;
    }   
}

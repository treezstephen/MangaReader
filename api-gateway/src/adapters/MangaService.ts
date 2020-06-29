import axios       from 'axios';

const MANGA_SERVICE_URI = process.env.MANGA_SERVICE_URI;

export default class MangaService {
    static async getManga({ mangaId }) {
        const { data } = await axios.get(`${MANGA_SERVICE_URI}/mangas/${mangaId}`);
        return data;
    }
    
    static async getChapter({ chapterId, mangaId }) {
        const { data } = await axios.get(`${MANGA_SERVICE_URI}/mangas/${mangaId}/chapters/${chapterId}`);
        return data;
    }
    
    static async search({ searchString }) {
        const { data } = await axios.post(`${MANGA_SERVICE_URI}/mangas/search?title=${searchString}`);
        return data;
    }   
}

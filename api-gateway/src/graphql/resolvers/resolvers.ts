import Manga     from './Query/mangas';
import MangaInfo from './Query/mangaInfo';

const resolvers = {
    Query: {
        mangaInfo: MangaInfo,
        mangas:    Manga,
    },
};

export default resolvers;

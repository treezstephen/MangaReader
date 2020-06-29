import Chapter   from './Query/chapter';
import Manga     from './Query/mangas';
import MangaInfo from './Query/mangaInfo';

const resolvers = {
    Query: {
        chapter:   Chapter,
        mangaInfo: MangaInfo,
        mangas:    Manga,
    },
};

export default resolvers;

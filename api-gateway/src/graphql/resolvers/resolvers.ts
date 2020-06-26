import Manga from './Query/mangas';

const resolvers = {
    Query: {
        mangas: Manga,
    },
};

export default resolvers;

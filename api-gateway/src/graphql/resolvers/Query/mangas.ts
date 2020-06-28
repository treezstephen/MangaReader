import MangaService from '../../../adapters/MangaService';

const mangasResolver = async (obj, args) => {
    const {
        searchString,
    } = args;
    return await MangaService.search({ searchString });
};

export default mangasResolver;

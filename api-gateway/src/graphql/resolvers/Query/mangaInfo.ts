import MangaService from '../../../adapters/MangaService';

const mangasInfoResolver = async (obj, args) => {
    const {
        mangaId,
    } = args;
    return await MangaService.getManga({ mangaId });
};

export default mangasInfoResolver;

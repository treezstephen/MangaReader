import MangaService from '../../../adapters/MangaService';

const mangasResolver = async () => {
    return await MangaService.fetchAllMangas();
};

export default mangasResolver;

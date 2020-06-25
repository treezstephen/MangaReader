import MangasService from '../../adapters/MangasService';

const mangasResolver = async () => {
    return await MangasService.fetchAllMangas();
};

export default mangasResolver;

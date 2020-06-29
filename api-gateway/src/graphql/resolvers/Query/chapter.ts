import MangaService from '../../../adapters/MangaService';

const chapterResolver = async (obj, args) => {
    const {
        mangaId,
        chapterId,
    } = args;
    return await MangaService.getChapter({ chapterId, mangaId });
};

export default chapterResolver;

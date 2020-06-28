import { 
    getModelForClass,
    modelOptions,
    prop,
    Severity,
} from '@typegoose/typegoose';
import logger from '../logger';

//Definition
interface Rating {
    value?: number,
    votes?: number,
}

@modelOptions({ options: { allowMixed: Severity.ALLOW } })
class Manga {
    @prop({ index: true, required: true })
    id: number;
    
    @prop()
    description?: string;
    
    @prop()
    follows?: number;
    
    @prop()
    image_url?: string;
    
    @prop()
    lang_name?: string;
    
    @prop()
    rating?: Rating;
    
    @prop({ required: true })
    title: string;
    
    @prop()
    views: number;
}

const MangaModel = getModelForClass(Manga);

export const search = async (searchString : string) => {
    const mangas = await MangaModel.find({
        title: { '$options': 'i', '$regex': searchString },
    });
    
    return mangas;
};

export const upsertMangas = async (mangas : Manga[]) => {
    const bulkMangas = mangas.map(manga => ({
        updateOne: {
            filter: { id: manga.id },
            update: manga,
            upsert: true,
        },
    }));
    
    try {
        return await MangaModel.bulkWrite(bulkMangas) as Manga[];
    }
    catch(e) {
        logger.error('Error creating multiple mangas');
        throw new Error(e);
    }
};

export default Manga;

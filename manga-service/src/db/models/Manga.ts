import mongoose from 'mongoose';

export const schema = new mongoose.Schema({
    title: String
});

const Manga = mongoose.model('Manga', schema);

export default Manga;

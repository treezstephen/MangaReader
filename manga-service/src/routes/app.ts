import { Router } from 'express';

const route = Router();

route.get('/', (req, res) => {
    return res.send('MangaService says Hello World');
});

export default route;

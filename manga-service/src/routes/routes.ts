import { getSession } from '../helpers/MangaDexConnection';

const setupRoutes = (app) => {
    
    app.get('/', (req, res) => {
        return res.send('MangaService says Hello World');
    });
    
    app.get('/session', async (req, res) => {
        const client = await getSession();

        const me = await client.getMe();
        
        return res.send(me);
    });
};


export default setupRoutes;

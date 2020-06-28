import { Router }     from 'express';

import appRoutes      from './app';
import mangasRoutes   from './mangas';
import seedRoutes     from './seed';

const routes = Router();

routes.use('/',       appRoutes);
routes.use('/mangas', mangasRoutes);
routes.use('seed',    seedRoutes);

export default routes;

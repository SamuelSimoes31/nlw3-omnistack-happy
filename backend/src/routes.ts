import { Router } from 'express';
import OrphanageController from './controllers/OrphanagesController'

const routes = Router();
//index, show, create, update, delete
routes.get('/orphanages', OrphanageController.index);
routes.get('/orphanages/:id', OrphanageController.show);
routes.post('/orphanages', OrphanageController.create);

export default routes;
import { Router } from 'express';
import multer from 'multer';
import OrphanageController from './controllers/OrphanagesController'

import uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);
//index, show, create, update, delete
routes.get('/orphanages', OrphanageController.index);
routes.get('/orphanages/:id', OrphanageController.show);
routes.post('/orphanages', upload.array('images'),OrphanageController.create);

export default routes;
import { Router } from 'express';
import * as homeController from '../controllers/homeController';

const router = Router();

router.get('/crud', homeController.getHomePage);
router.post('/post-crud', homeController.postCRUD);
router.get('/get-crud', homeController.displayGetCRUD);
router.get('/edit-crud', homeController.getEditCRUD);
router.post('/put-crud', homeController.putCRUD);
router.get('/delete-crud', homeController.deleteCRUD);

export default router;

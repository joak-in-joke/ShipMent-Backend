import { Router } from 'express';
const router = Router();

import {createTrasbordo,getAllTrasbordo,getTrasbordo,deleteTrasbordo,updateTrasbordo} from '../controllers/trasbordos.controller'


//admin/dashboard
router.post('/', createTrasbordo);
router.get('/', getAllTrasbordo);
router.get('/:id',getTrasbordo);
router.delete('/:id', deleteTrasbordo);
router.put('/:id', updateTrasbordo);


export default router;
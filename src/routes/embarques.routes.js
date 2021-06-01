import { Router } from 'express';
const router = Router();

import {createEmbarques,getAllEmbarques,getEmbarques,deleteEmbarques,updateEmbarques,getActivos,getFinalizados} from '../controllers/embarques.controller'


//admin/dashboard
router.post('/', createEmbarques);
router.get('/', getAllEmbarques);
router.get('/:id',getEmbarques);
router.delete('/:id', deleteEmbarques);
router.put('/:id', updateEmbarques);
router.get('/activos/:id', getActivos);
router.get('/finalizados/:id', getFinalizados);


export default router;
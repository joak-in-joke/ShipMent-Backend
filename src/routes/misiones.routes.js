import { Router } from 'express';
const router = Router();

import {createMisiones, getAllMisiones, getMision, deleteMision, updateMision} from '../controllers/misiones.controller'


//admin/dashboard
router.post('/', createMisiones);
router.get('/', getAllMisiones);
router.get('/:id',getMision);
router.delete('/:id', deleteMision);
router.put('/:id', updateMision);


export default router;
import { Router } from 'express';
const router = Router();

import {createMissions, getAllMissions, getMision, deleteMision, updateMision} from '../controllers/mision.controller'


//admin/dashboard
router.post('/', createMissions);
router.get('/', getAllMissions);
router.get('/:id',getMision);
router.delete('/:id', deleteMision);
router.put('/:id', updateMision);


export default router;
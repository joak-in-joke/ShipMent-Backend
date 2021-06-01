import { Router } from 'express';
const router = Router();

import {createDatos,getAllDatos,getDatos,deleteDatos,updateDatos} from '../controllers/datos.controller'


//admin/dashboard
router.post('/', createDatos);
router.get('/', getAllDatos);
router.get('/:id',getDatos);
router.delete('/:id', deleteDatos);
router.put('/:id', updateDatos);


export default router;
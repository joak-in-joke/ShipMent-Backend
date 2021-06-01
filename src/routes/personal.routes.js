import { Router } from 'express';
const router = Router();

import {createPersonal,getAllPersonal,getPersonal,deletePersonal,updatePersonal,getUsuario} from '../controllers/personal.controller'


//admin/dashboard
router.post('/', createPersonal);
router.get('/', getAllPersonal);
router.get('/:id',getPersonal);
router.delete('/:id', deletePersonal);
router.put('/:id', updatePersonal);
router.get('/usuario/:id', getUsuario);

export default router;
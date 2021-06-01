import { Router } from 'express';
const router = Router();

import {createProvedores,getAllProvedores,getProvedores,deleteProvedores,updateProvedores, getProvedor} from '../controllers/provedores.controller'


//admin/dashboard
router.post('/', createProvedores);
router.get('/', getAllProvedores);
router.get('/:id',getProvedores);
router.delete('/:id', deleteProvedores);
router.put('/:id', updateProvedores);
router.get('/provedor/:id',getProvedor);


export default router;
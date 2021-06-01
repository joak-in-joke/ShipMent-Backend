import { Router } from 'express';
const router = Router();

import {createReclamos,getAllComentariosProvedor,getComentario,deleteComentario,updateComentario} from '../controllers/comentarios.controller'


//admin/dashboard
router.post('/', createReclamos);
router.get('/', getAllComentariosProvedor);
router.get('/:id',getComentario);
router.delete('/:id', deleteComentario);
router.put('/:id', updateComentario);



export default router;
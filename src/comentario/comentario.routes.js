import {Router} from 'express';
import { crearComentario,
    obtenerComentarios
 } from './comentario.controller.js';

 const router = Router()

router.post('/crear/:publicacionId', crearComentario)
router.get('/listar/:publicacionId', obtenerComentarios)

export default router
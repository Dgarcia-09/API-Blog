import {Router} from 'express';
import { crearPublicacion,
    listarPublicaciones,
    filtrarPublicaciones,
 } from './publicacion.controller';
 import { crearPublicacionValidator } from '../middlewares/publicacion-validator.js';


const router = Router()

router.post('/crear', crearPublicacionValidator, crearPublicacion)
router.get('/listar', listarPublicaciones)
router.get('/filtrar/:curso', filtrarPublicaciones)



export default router
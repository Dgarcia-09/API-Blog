import {Router} from 'express';
import { crearPublicacion,
    listarPublicaciones,
    filtrarPublicaciones,
 } from './publicacion.controller.js';
 import {uploadPostPicture} from '../middlewares/multer-uploads.js'
 import {deleteFileOnError} from '../middlewares/delete-file-on-error.js'
 import { crearPublicacionValidator } from '../middlewares/publicacion-validator.js';


const router = Router()

router.post('/crear',
     uploadPostPicture.single('imagen'),
     crearPublicacionValidator,
     deleteFileOnError,
    crearPublicacion)
router.get('/listar', listarPublicaciones)
router.get('/filtrar/:curso', filtrarPublicaciones)



export default router
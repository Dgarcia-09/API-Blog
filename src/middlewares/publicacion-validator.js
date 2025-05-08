import {body} from 'express-validator';
import { handleErrors } from './handle-errors.js';
import { validarCampos } from './validate-fields.js';


export const crearPublicacionValidator = [
    body('titulo').notEmpty().withMessage('El titulo es obligatorio'),
    body('titulo').isLength({max: 100}).withMessage('El titulo no puede superar los 100 caracteres'),
    body('descripcion').notEmpty().withMessage('La descripcion es obligatoria'),
    body('descripcion').isLength({max: 500}).withMessage('La descripcion no puede superar los 500 caracteres'),
    body('curso').notEmpty().withMessage('El curso es obligatorio'),
    body('curso').isIn(['Taller', 'Tecnologia', 'Practica Supervisada']).withMessage('El curso debe ser Taller, Tecnologia o Practica Supervisada'),
    body('imagen').optional(),
    validarCampos,
    handleErrors
]

export const crearComentarioValidator = [
    body('userName').notEmpty().withMessage('El nombre de usuario es obligatorio'),
    body('userName').isLength({max: 20}).withMessage('El nombre de usuario no puede superar los 20 caracteres'),
    body('comentario').notEmpty().withMessage('El comentario es obligatorio'),
    body('comentario').isLength({max: 500}).withMessage('El comentario no puede superar los 500 caracteres'),
    validarCampos,
    handleErrors
]


import {body} from 'express-validator';
import { handleErrors } from './handle-errors';
import { validarCampos } from './validate-fields.js';


export const crearPublicacionValidator = [
    body('titulo').notEmpty().withMessage('El titulo es obligatorio'),
    body('titulo').isLength({max: 100}).withMessage('El titulo no puede superar los 100 caracteres'),
    body('descripcion').notEmpty().withMessage('La descripcion es obligatoria'),
    body('descripcion').isLength({max: 500}).withMessage('La descripcion no puede superar los 500 caracteres'),
    body('curso').notEmpty().withMessage('El curso es obligatorio'),
    body('curso').isIn(['Taller', 'Tecnologia', 'Practica Supervisada']).withMessage('El curso debe ser Taller, Tecnologia o Practica Supervisada'),
    body('fecha').notEmpty().withMessage('La fecha es obligatoria'),
    body('fecha').isDate().withMessage('La fecha debe ser una fecha valida'),
    body('imagen').optional(),
    validarCampos,
    handleErrors
]


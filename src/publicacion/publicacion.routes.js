import { Router } from 'express';
import {
  crearPublicacion,
  listarPublicaciones,
  filtrarPublicaciones,
} from './publicacion.controller.js';
import { uploadPostPicture } from '../middlewares/multer-uploads.js';
import { deleteFileOnError } from '../middlewares/delete-file-on-error.js';
import { crearPublicacionValidator } from '../middlewares/publicacion-validator.js';

const router = Router();

/**
 * @swagger
 * /crear:
 *   post:
 *     summary: Crear una nueva publicación
 *     tags:
 *       - Publicaciones
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *                 description: Título de la publicación
 *               contenido:
 *                 type: string
 *                 description: Contenido de la publicación
 *               imagen:
 *                 type: string
 *                 format: binary
 *                 description: Imagen asociada a la publicación
 *             required:
 *               - titulo
 *               - contenido
 *     responses:
 *       201:
 *         description: Publicación creada exitosamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post(
  '/crear',
  uploadPostPicture.single('imagen'),
  crearPublicacionValidator,
  deleteFileOnError,
  crearPublicacion
);

/**
 * @swagger
 * /listar:
 *   get:
 *     summary: Listar todas las publicaciones
 *     tags:
 *       - Publicaciones
 *     responses:
 *       200:
 *         description: Lista de publicaciones obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID de la publicación
 *                   titulo:
 *                     type: string
 *                     description: Título de la publicación
 *                   contenido:
 *                     type: string
 *                     description: Contenido de la publicación
 *                   fecha:
 *                     type: string
 *                     format: date-time
 *                     description: Fecha de creación de la publicación
 *       500:
 *         description: Error interno del servidor
 */
router.get('/listar', listarPublicaciones);

/**
 * @swagger
 * /filtrar/{curso}:
 *   get:
 *     summary: Filtrar publicaciones por curso
 *     tags:
 *       - Publicaciones
 *     parameters:
 *       - name: curso
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: Nombre del curso para filtrar las publicaciones
 *     responses:
 *       200:
 *         description: Lista de publicaciones filtrada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID de la publicación
 *                   titulo:
 *                     type: string
 *                     description: Título de la publicación
 *                   contenido:
 *                     type: string
 *                     description: Contenido de la publicación
 *                   fecha:
 *                     type: string
 *                     format: date-time
 *                     description: Fecha de creación de la publicación
 *       404:
 *         description: No se encontraron publicaciones para el curso especificado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/filtrar/:curso', filtrarPublicaciones);

export default router;
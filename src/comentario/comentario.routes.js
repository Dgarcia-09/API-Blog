import { Router } from 'express';
import { crearComentario, obtenerComentarios } from './comentario.controller.js';

const router = Router();

/**
 * @swagger
 * /crear/{publicacionId}:
 *   post:
 *     summary: Crear un nuevo comentario en una publicación
 *     tags:
 *       - Comentarios
 *     parameters:
 *       - name: publicacionId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la publicación a la que se agregará el comentario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               contenido:
 *                 type: string
 *                 description: Contenido del comentario
 *             required:
 *               - contenido
 *     responses:
 *       201:
 *         description: Comentario creado exitosamente
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Publicación no encontrada
 */
router.post('/crear/:publicacionId', crearComentario);

/**
 * @swagger
 * /listar/{publicacionId}:
 *   get:
 *     summary: Obtener comentarios de una publicación
 *     tags:
 *       - Comentarios
 *     parameters:
 *       - name: publicacionId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la publicación cuyos comentarios se desean obtener
 *     responses:
 *       200:
 *         description: Lista de comentarios obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID del comentario
 *                   contenido:
 *                     type: string
 *                     description: Contenido del comentario
 *                   fecha:
 *                     type: string
 *                     format: date-time
 *                     description: Fecha de creación del comentario
 *       404:
 *         description: Publicación no encontrada
 */
router.get('/listar/:publicacionId', obtenerComentarios);

export default router;
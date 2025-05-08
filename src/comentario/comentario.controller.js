import Comentario from './comentario.model.js';
import Publicacion from '../publicacion/publicacion.model.js';


export const crearComentario = async (req, res) => {
    try{
        const {publicacionId} = req.params
        const data = req.body

        const publicacion = await Publicacion.findById(publicacionId)
        if(!publicacion){
            return res.status(404).json({
                success: false,
                message: "Publicacion no encontrada"
            })
        }

        const comentario = new Comentario(data)
        comentario.publicacion = publicacionId

        await comentario.save()

        return res.status(201).json({
            success: true,
            message: "Comentario creado correctamente",
            comentario
        })


    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Error al crear el comentario",
            error: error.message
        })
    }
}

export const obtenerComentarios = async (req, res) =>{
    try{
        const {publicacionId} = req.params

        const comentarios = await Comentario.find({publicacion: publicacionId}).sort({createdAt: -1}).exec()

        if(!comentarios || comentarios.length === 0){
            return res.status(404).json({
                success: false,
                message: "No se encontraron comentarios para esta publicacion"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Comentarios obtenidos correctamente",
            comentarios
        })

    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Error al obtener los comentarios",
            error: error.message
        })

    }
}
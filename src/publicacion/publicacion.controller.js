import Publicacion from './publicacion.model.js'

export const crearPublicacion = async (req, res) => {
    try {
        const data = req.body
        let imagen = req.file ? req.file.filename : null
        data.imagen = imagen

        const publicacion = new Publicacion(data)
        await publicacion.save()

        return res.status(201).json({
            success: true,
            message: "Publicacion creada correctamente",
            publicacion
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al crear la publicacion",
            error: error.message
        })
    }
}



export const listarPublicaciones = async (req, res) =>{
    try{
        const publicaciones = await Publicacion.find()
        .sort({createdAt: -1}) 
        .exec()

        return res.status(200).json({
            success: true,
            message: "Publicaciones listadas correctamente",
            publicaciones
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Error al listar las publicaciones",
            error: error.message
        })
    }
}

export const filtrarPublicaciones = async (req, res) =>{
    try{
        const {curso} = req.params

        const publicaciones = await Publicacion.find({
            curso
        })
        .sort({createdAt: -1})
        .exec()

        res.status(200).json({
            success: true,
            message: "Publicaciones filtradas correctamente",
            publicaciones
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Error al filtrar las publicaciones",
            error: error.message
        })
    }
}





import {Schema, model} from 'mongoose';

const comentarioSchema = new Schema({
    userName:{
        type: String,
        required: [true, 'El nombre de usuario es obligatorio'],
        maxlength: [20, 'El nombre de usuario no puede superar los 20 caracteres']
    },
    comentario:{
        type: String,
        required: [true, 'El comentario es obligatorio'],
        maxlength: [500, 'El comentario no puede superar los 500 caracteres']
    },
    publicacion:{
        type: Schema.Types.ObjectId,
        ref: 'Publicacion',
        required: [true, 'La publicacion es obligatoria']
    },
    fecha:{
        type: Date,
        default: Date.now
    }
},{
    timestamps: true,
    versionKey: false
})

export default model('Comentario', comentarioSchema)

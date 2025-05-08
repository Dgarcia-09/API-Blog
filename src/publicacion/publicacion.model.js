import { max } from 'date-fns';
import {Schema, model} from 'mongoose';

const publicacionSchema = new Schema({
    titulo:{
        type: String,
        required: [true, 'El titulo es obligatorio'],
        maxlength: [100, 'El titulo no puede superar los 100 caracteres']
    },
    descripcion:{
        type: String,
        required: [true, 'La descripcion es obligatoria'],
        maxlength: [500, 'La descripcion no puede superar los 500 caracteres']
    },
    curso:{
        type: String,
        required: [true, 'El curso es obligatorio'],
        enum: ['Taller', 'Tecnologia', 'Practica Supervisada']
        },
    imagen:{
        type: String
    },
    fecha:{
        type: Date,
        default: Date.now
    }
},{
    timestamps: true,
    versionKey: false
})

export default model('Publicacion', publicacionSchema)
    
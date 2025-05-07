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
    fecha:{
        type: Date,
        required: [true, 'La fecha es obligatoria'],
        validate: {
            validator: function(value) {
                return value >= new Date();
            },
            message: 'La fecha debe ser mayor o igual a la fecha actual'
        }
    },
    imagen:{
        type: String
    },
},{
    timestamps: true,
    versionKey: false
})

export default model('Publicacion', publicacionSchema)
    
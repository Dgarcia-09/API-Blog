import express from "express";
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import {dbConnection} from "./mongo.js"
import apiLimiter from "../src/middlewares/rate-limit-validator.js";
import publicacionRouter from "../src/publicacion/publicacion.routes.js"
import comentarioRouter from "../src/comentario/comentario.routes.js"


const middlewares = (app) =>{
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());
    app.use(cors());
    app.use(helmet());
    app.use(morgan("dev"))
    app.use(apiLimiter);
}

const routes = (app) =>{
    app.use('/blog/v1/publicacion', publicacionRouter)
    app.use('/blog/v1/comentario', comentarioRouter)

}

const conectarDb = async () =>{
    try{
        await dbConnection()

    }catch(err){
        console.log(`Database connection failed: ${err}`)
        process.exit(1)
    }
}

export const initServer = () =>{
    const app = express()
    try{
        middlewares(app);
        conectarDb();
        routes(app);
        const port = process.env.PORT || 3001;
        app.listen(port, () =>{
            console.log(`Servidor corriendo en el puerto ${port}`)
        })


    }catch(err){
        console.log(`Server init failed: ${err}`)
    }
}
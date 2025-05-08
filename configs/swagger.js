import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options ={
    swaggerDefinition:{
        openapi:"3.0.0",
        info:{
            title: "Blog de aprendizaje",
            version: "1.0.0",
            description: "API para un blog de aprendizaje",
            contact:{
                name: "Diego Garcia",
                email: "dgarcia-2023532@kinal.org.gt"
            }
        },
        servers:[
            {
                url: "http://127.0.0.1:3001/blog/v1"
            }
        ]
    },
    apis:[
        "./src/publicacion/publicacion.routes.js",
        "./src/comentario/comentario.routes.js"

    ]
}

const swaggerDocs = swaggerJSDoc(options)

export { swaggerDocs, swaggerUi}
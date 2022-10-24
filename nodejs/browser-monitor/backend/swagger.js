const swaggerAutogen = require('swagger-autogen')()


const doc = {
    info: {
        version: "1.0.0",
        title: "Backend API for Browser Extension Web Tracking",
        description: "Documentation for Browser Extension Web Tracking"
    },
    host: "localhost:5000",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "User",
            "description": "Endpoints"
        }
    ],
    securityDefinitions: {
        apiKeyAuth:{
            type: "apiKey",
            in: "header",       // can be "header", "query" or "cookie"
            name: "X-API-KEY",  // name of the header, query parameter or cookie
            description: "any description..."
        }
    },
}

const outputFile = './swagger-output.json'
const endpointsFiles = ['./api/index.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./')           // Your project's root file
})
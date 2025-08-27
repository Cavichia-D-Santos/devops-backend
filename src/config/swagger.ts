import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Alunos',
            version: '1.0.0', //Versao do nosso sistema
            description: 'API REST para gerenciamento de alunos'
        },
        servers: [ //Podemos ter diversos servidores
            {
                url: 'http://localhost:3000',
                description: 'Servidor local de desenvolvimento'
            }
        ]
    },
    apis: ['.src/routes/*.ts', './src/controllers/*.ts'] //Todo arquivo .ts nesta pasta é nossa API
};

export const swaggerSpec = swaggerJSDoc(options);
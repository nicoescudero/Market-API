require('dotenv').config();
const express=require('express');
const morgan=require('morgan');
const helmet=require('helmet');
const swaggerJS=require('swagger-jsdoc');
const swaggerUI=require('swagger-ui-express');
const app= express();
const {connect}=require('./db');
connect();

const swaggerDefinition={
    definition:{
        openapi: '3.0.1',
        info:{
            title:'Market API',
            version: '1.0.0',
            description: 'A Market Api'
        },
        components: {
            securitySchemes: {
              bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
              }
            }
          },
        servers:[{url:'http://localhost:3000'}]
    },
    apis:['./docs/*.js']
};


//settings
app.set('port',process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use(helmet());


//routes
app.use('/',require('./routes'));
app.use('/docs',swaggerUI.serve,swaggerUI.setup(swaggerJS(swaggerDefinition)));

app.listen(app.get('port'),()=>console.log(`listening on port http://localhost:${app.get('port')}`));
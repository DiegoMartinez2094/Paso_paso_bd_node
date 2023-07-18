/**
 * 0-crear base de datos  .sql 
   1-instalacion del node con nvm noe install, nvm use node
   2-crear el package.json con npm init -y
   3- "main": "app.js",
  "type": "module",
  4-instalar las dependecias: npm i -E -D nodemon, class transformer, dotenv,
  express, mysql2, nodemon, reflect-metadata, typescript 
  5- en el package.json edito:
   "scripts": {
    "tsc": "tsc -w",
    "dev": "nodemon --quiet app.js"
  },
  6-crear el archivo app.js
  7-creamos el archivo .env donde cofiguramos las variables de entorno
    en estos casos la conexion: MY_CONFIG={"hostname":"127.0.0.2", "port":5010}
  8-creamos el archivo tsconfig.js: 
  {
  "compilerOptions": {
    "target": "es6",
    "module": "ES6",
    "moduleResolution": "node",
    "outDir": "./controller",
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
  9- en app.js
       import express from 'express'; //importar la libreria express 
       import dotenv from "dotenv";   //importar la libreria dotenv que permite cargar variables de entorno
 */
  import usuarios from './routers/usuarios.js'
  
  import express from 'express'; //importar la libreria express 
  import dotenv from "dotenv";   //importar la libreria dotenv que permite cargar variables de entorno
  
  dotenv.config(); //inicializa las variables de entorno del .env
  
  const appExpress = express(); //variable appExpres que use la función express()
  
  appExpress.use(express.json()); //para que la variable appExpress entienda archivos json
  
  let config = JSON.parse(process.env.MY_CONFIG);//lee la variable de entorno MY_CONFIG y la guarda 
  
  appExpress.listen(config, ()=>{
      console.log(`http://${config.hostname}:${config.port}`); //mostramos en la consola el enlace del servidor
  });

  /**
    10-creamos la carpeta routers
    11-creamos las conexiones de la base de datos con archivos .js ejemplo: usuarios.js
    12-importamos las conexiones de la base de datos lo situamos en la parte superior=> import usuarios from './routers/usuarios.js'
    13- llamanos la funcion appExpress =>   appExpress.use("/usuarios",usuarios) 
   */
   
    appExpress.use("/usuarios",usuarios) //nombramos el endpoint y el import que usamos anteriormente 

    /**14-creamos la carpeta middleware
       15-creamos archivos ejemplo valieUsuario.js
       16-importamos en el router usuarios.js => import appValidate from "../middleware/valiUser.js"; //importamos el middleware para usarlos en el post y put 
       17-creamos la carpeta storage user.ts 
       18-abrimos la segunda terminal y escribimos  npm run tsc y automaticamente se crea la carpeta controller  con el archivo user.js
       
       */
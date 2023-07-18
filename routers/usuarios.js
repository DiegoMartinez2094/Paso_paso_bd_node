import { Router } from "express"; //importamos la libreria ROUTER de express 
import mysql from "mysql2";  //importamos la libreria mysql de mysql2

import appValidate from "../middleware/valideUsuario.js"; //importamos el middleware para usarlos en el post y put 

const appUsuario = Router(); /** guardamos la configuracion Router() en la constante appUsuario */
let con = undefined;/**NO SEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE */

// conexion a base de datos
appUsuario.use((req, res, next)=>{
    try {
        con = mysql.createPool({
            host: "127.0.0.1",
            // user: "campus",
            // password: "campus2023",
             user: "root", /*BASE DE DATOS LOCAL DE PHPMYADMI */
             password: "123456",
            database: "repaso",
            port: 3306
    });
    next();        
    } catch (error) {
        res.status(500).send('Conexion pailas papá, funado de la red :(')
    }
})

appUsuario.post("/",appValidate, (req, res) => { //el appValidate es el middleware que importamos anteriormente
    con.query(
        /*sql*/ `INSERT INTO usuarios SET ?`,
        req.body,
        (err,data,fils)=>{
            console.log(err);
            console.log(data);
            console.log(fils);
            data.affectedRows+=200;
            let result = req.body;
            result.id= data.insertId;
            res.status(data.affectedRows).send(result);
        }
    );
})

appUsuario.get("/", (req, res) => {
    con.query(
        /*sql*/ `SELECT * FROM usuarios`,
        req.body,
        (err,data,fils)=>{
            console.log(err);
            console.log(data);
            console.log(fils);
            res.send(data)
        }
    );
})

appUsuario.put("/:id", (req, res) => {
    con.query(
        /*sql*/ `UPDATE usuarios SET ? WHERE id= ?`,
        [req.body, req.params.id],
        (err,data,fils)=>{
            console.log(err);
            console.log(data);
            console.log(fils);
            res.send(data)
        }
    );
})

appUsuario.delete("/:id", (req, res) => {
    con.query(
        /*sql*/ `DELETE FROM usuarios WHERE id= ?`,
        req.params.id,
        (err,data,fils)=>{
            console.log(err);
            console.log(data);
            console.log(fils);
            res.send(data)
        }
    );
})

export default appUsuario;
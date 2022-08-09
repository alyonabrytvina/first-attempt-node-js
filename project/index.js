const express = require('express');
const mongoose = require('mongoose');
const router = require("../routes/router.js");
const fileUpload = require('express-fileupload');
const fs = require("fs");

const PORT = 3000;
const DB_URL = 'mongodb://localhost:27017/';

//создать новое приложение express
const app = express();
app.use(express.json());
app.use(fileUpload({}));
app.use('/api', router);

async function startApp(){
    try{
        //подключение
        //Второго параметра передается объект,
        //который, во-первых, устанавливает топологию для подключения к MongoDB (useUnifiedTopology: true),
        //а во-вторых, устанавливает использование нового парсера (useNewUrlParser: true) для парсинга адреса сервера MongoDB.
        await mongoose.connect(DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });

        app.listen(PORT, () => {
            console.log(`server started on port${PORT}`)
        })
    }catch(err){
        console.log(err)
    }
}

startApp();




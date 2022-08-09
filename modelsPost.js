const mongoose = require("mongoose");

//Mongoose - это ODM (* Object Document Mapper - объектно-документный отобразитель).
//Это означает, что Mongoose позволяет вам определять объекты со
//строго-типизированной схемой, соответствующей документу MongoDB.
const ModelsPost = new mongoose.Schema({
    data: {
        "taskName": String,
        "developers": [String],
        "workType": String,
        "status": String,
        "estimation": Number,
        "totalTimeSpent": Number,
        "myTimeSpentByPeriod": Number,
        "efficiency": Boolean,
    },
    "status": [String],
    "developers": {
        "design": [String],
        "frontEnd": [String],
        "backEnd": [String],
        "pms": [String]
    },
    "selectCategories": [
        {
            "value": String,
            "label": String
        },
    ],
    "paginationSelect": [
        {
            "option": Number,
        },
    ]
})

//Затем, используя эту схему, создаем модель пользователя:
//Mongoose затем будет автоматически искать в базе данных коллекцию,
//название которой соответствует названию модели во множественном числе.
//Например, в данном случае название модели "ModelsPost".
//Во множественном числе это "posts".
//Поэтому при работе с данными модели ModelsPost (добавлении, удалении, редактировании и получении объектов)
//mongoose будет обращаться к коллекции "modelsPosts"
//Второй параметр функции mongoose.model - собственно схема.
module.exports = mongoose.model('ModelsPost', ModelsPost)

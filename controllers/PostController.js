// const PostService = require("../PostService.js");
//
// //Контроллер обрабатывает запрос.
// //позволяют связать представления и модели и выполняют некоторую логику по обработке запроса.
// //Результат обработки контроллера отправляется в ответ клиенту.
// //Нередко ответ представляет html-страницу, которую пользователь видит в своем браузере.
// class PostController{
//     async getAll(req, res){
//         try{
//             const posts = await PostService.getAll();
//             return res.json(posts);
//         }catch (err){
//             res.status(500).json(err)
//         }
//     }
//
//     async getOne(req, res){
//         try{
//             const post = await PostService.getOne(req.params.id);
//             return res.json(post);
//         }catch (err){
//             res.status(500).json(err)
//         }
//     }
//
//     async update(req, res){
//         try{
//             const updatedPost = await PostService.update(req.body);
//             return res.json(updatedPost);
//         }catch (err){
//             res.status(500).json(err)
//         }
//     }
//
//     async delete(req, res){
//         try{
//             const updatedPost = await PostService.update(req.params.id);
//             return res.json(updatedPost);
//         }catch (err){
//             res.status(500).json(err)
//         }
//     }
// }
//
// module.exports = new PostController();

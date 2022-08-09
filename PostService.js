// const Post = require("./modelsPost.js");
//
// class PostService {
//     async getAll() {
//             const posts = await Post.find();
//             return posts;
//     }
//
//     async getOne(id) {
//         if (!id) {
//             throw new Error('Id is not defined');
//         }
//         const post = await Post.findById(id);
//         return post;
//     }
//
//     async update(post) {
//         if (!post._id) {
//             throw new Error('Id is not defined');
//         }
//         const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true});
//         return updatedPost
//     }
//
//     async delete(id) {
//         if (!id) {
//             throw new Error('Id is not defined');
//         }
//         const updatedPost = await Post.findByIdAndDelete(id);
//         return updatedPost;
//     }
// }
//
// module.exports = new PostService();

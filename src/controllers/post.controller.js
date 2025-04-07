module.exports.createPostView =(req,res)=>{
    res.render('create-post');
}

module.exports.createPost = async(req,res)=>{
const{media,caption}= req.body;
console.log(req.user);
// const post = await postModel.create({
//     meduia,
//     caption
// })
// res.send(post);
}
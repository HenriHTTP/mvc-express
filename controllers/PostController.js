const posts =  require("../models/posts")

module.exports  = class  PostController { 
    static createPost(req,res){ 
        res.render('create')
    }
    static async createPostSave  (req, res) {
        if(!req.body){
            res.status(200).json({message:"this request are NULL"})
        }
        try{ 
            
         const {title,content,notes}= req.body
         const newPost =  await posts.create( {title,content,notes})
         res.status(200).redirect('/home')

        }catch(err){ 
            res.status(400).json({message:`are a error in your resquest for server ${err}`})
        }
      
    }
       
    static UpdatePost (req,res){ 
        res.redirect('update')
    }
}
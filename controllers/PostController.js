const posts =  require("../models/posts")


module.exports  = class  PostController {  

    // Method to render the post creation page
    static createPost(req,res){ 
        res.render('create')
    }
    // method for create post and save
    static async createPostSave  (req, res) {   
        if(!req.body.content ||!req.body.title ){
            res.status(200).json({ message: "Title and content are required"})
        }
        try{ 
            
         const {title,content,notes}= req.body
         const newPost =  await posts.create( {title,content,notes})
         res.status(200).redirect('/home')

        }catch(err){ 
            res.status(400).json({message:`has a error in your resquest for server ${err}`})
        }
      
    }

    //redirect method for post and load data posts in page  
    static async UpdatePost (req,res){ 
        try { 
            const data = await posts.findByPk( req.params.id )
            res.render('update',{data:  data.dataValues})
           
        } catch (err) {
            res.status(500).json({message:`has a error in your resquest for server ${err}`});
          }

       
    }

     // Method to render the page displaying all posts
    static async  ShowAllPost (req,res) { 
        try {

            const data= await posts.findAll();
            res.render('index',{data: data})

          } catch (err) {
            res.status(500).json({message:`has a error in your resquest for server ${err}`});
          }
    }
    // Method to delete a post
    static async DropPost (req,res){ 
        try{ 
          
            const foundPosts = await posts.findByPk( req.params.id ) // search id
            await foundPosts.destroy()
            

            res.status(200).redirect('/home')

        }catch(err){

            res.status(500).json({message:`has a error in your resquest for server ${err}`});
        }
    }
      // Method to update and save changes to a post
    static async UpdatePostSave (req,res){ 
        try{ 
            const {title,content,notes} = req.body;
            const foundPosts = await posts.findByPk( req.params.id ) // search id
            
            foundPosts.title = title;
            foundPosts.content = content;
            foundPosts.notes = notes || null;

            await foundPosts.save();
            
        
            res.status(200).redirect('/home')

        }catch(err){
            
            res.status(500).json({message:`has a error in your resquest for server ${err}`});
        }
    }
}
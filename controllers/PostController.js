const posts =  require("../models/posts")

module.exports  = class  PostController {  //redirect method
    static createPost(req,res){ 
        res.render('create')
    }
  
    static async createPostSave  (req, res) {   // method for create post and save
        if(!req.body){
            res.status(200).json({message:"this request are NULL"})
        }
        try{ 
            
         const {title,content,notes}= req.body
         const newPost =  await posts.create( {title,content,notes})
         res.status(200).redirect('/home')

        }catch(err){ 
            res.status(400).json({message:`has a error in your resquest for server ${err}`})
        }
      
    }
       
    static async UpdatePost (req,res){ //redirect method
        try { 
            const data = await posts.findByPk( req.params.id )
            console.log(data.dataValues)
            res.render('update',{data:  data.dataValues})
           
        } catch (err) {
            res.status(500).json({message:`has a error in your resquest for server ${err}`});
          }

       
    }
    static async  ShowAllPost (req,res) { // find all method
        try {

            const data= await posts.findAll();
            res.render('index',{data: data})

          } catch (err) {
            res.status(500).json({message:`has a error in your resquest for server ${err}`});
          }
    }
    static async DropPost (req,res){ 
        try{ 
          
            const foundPosts = await posts.findByPk( req.params.id ) // search id
            await foundPosts.destroy()
            res.status(200).redirect('/home')

        }catch(err){

            res.status(500).json({message:`has a error in your resquest for server ${err}`});
        }
    }
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
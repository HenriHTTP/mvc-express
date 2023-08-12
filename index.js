const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const cors = require("cors");
const dotenv = require("dotenv");
const port = process.env.PORT || 3001; 

dotenv.config();
app.use(express.urlencoded({ extended: true })); // configuration for express accept datas on the html forms
app.use(express.json()); // cors configuration
app.use(cors());

app.engine('handlebars', handlebars({ // handlebars configuration
    layoutsDir: './views/layouts/', 
    defaultLayout: "main" 
}));

app.set("view engine", "handlebars");

app.get('/',(req,res)=>{ 
    res.render('index')
});

app.post("/upload", (req,res)=> { 
  try{
    const posts = {
      content: req.body.content,
      title: req.body.title,  // Adicione esta linha para acessar o título do formulário
      notes: req.body.notes   // Adicione esta linha para acessar as observações do formulário
  };
    console.log(req.body)
    //console.log(posts)
    res.status(200).redirect('/tasks')
  }catch(err){ 
    res.staus(500).json({Message : `houve um erro na requisição ${errr}`})
  }
 
 
  
});



// Start the server
app.listen(port, () =>
  console.log(`The server is running on port ${port}`)
);
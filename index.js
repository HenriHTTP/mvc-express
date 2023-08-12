const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const cors = require("cors");
const dotenv = require("dotenv");
const port = process.env.PORT || 3001;

dotenv.config();

app.use(express.json());
app.use(cors());

app.engine('handlebars', handlebars({
    layoutsDir: './views/layouts/', 
    defaultLayout: "main" 
}));

app.set("view engine", "handlebars");

app.get('/',(req,res)=>{
    res.render('index')
})


// Start the server
app.listen(port, () =>
  console.log(`The server is running on port ${port}`)
);
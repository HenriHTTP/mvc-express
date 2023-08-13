const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const cors = require("cors");
const dotenv = require("dotenv");
const port = process.env.PORT || 3001; 
const postsRoutes = require('./routes/postsRoutes')

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
  res.render('create')
});

app.use('/', postsRoutes); // main routes



// Start the server
app.listen(port, () =>
  console.log(`The server is running on port ${port}`)
);
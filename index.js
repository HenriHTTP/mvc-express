const Express  = require("express")
const app  = Express()
const Handlebars = require("express-handlebars")
const cors =  require("cors")
const dotenv =  require("dotenv")

dotenv.config()



app.use(Express.json())
app.use(cors())

app.listen( 
)
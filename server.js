const express = require("express");
const app = express();
const PORT = 3000 || process.env.PORT


app.use(express.json());
app.use(express.urlencoded({extended:false}))

const Routes = require("./routes/route");

app.use("/", Routes);

app.listen(3000,()=>{
    console.log(`server is runing at port ${PORT}`)
})
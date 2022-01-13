const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const port = 8080;
const morgan = require("morgan");

const todoRoute = require("./router/todoRoute");

app.use(express.json());
app.use("/todo", todoRoute);
app.use(morgan("tiny"));
app.use(cors());


app.use(express.json());
require('dotenv').config();


mongoose.connect("mongodb+srv://LucasBanco:12065722@cluster0.kuddv.mongodb.net/oneSigntPro?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
.then(() => console.log("database conectado"))
.catch((err) => console.log("database fail", err));


app.listen(port,()=> {console.log("8080 connectado")});

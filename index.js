const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const port = 8000;
const morgan = require("morgan");

const todoRoute = require("./router/todoRoute");

app.use(express.json());
app.use("/todos", todoRoute);
app.use(morgan("tiny"));

app.use(cors());


app.use(express.json());
require('dotenv').config();


mongoose.connect("mongodb+srv://LucasBanco:12065722@cluster0.kuddv.mongodb.net/oneSigntPro?authSource=admin&replicaSet=atlas-q4t055-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true",{
    useNewUrlParser:true,
    useUnifiedTopology: true
}) 
.then(() => console.log("database conectado"))
.catch((err) => console.log("database fail", err));


app.listen(port,()=> {console.log("8080 connectado")});

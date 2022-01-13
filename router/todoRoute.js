const express = require("express");
const router = express.Router();
const Todo = require("../models/todos");
router.get("/", (req, res)=>{
    res.send("sou  todo page")
});

router.post("/", async(req, res)=>{
    const {title, description} = req.body;
    try{
        const todo = await Todo.create({title, description});
        res.json({message:"deu certo", todo});
    }catch(error){
        res.status(400).send({error: "falha ao cadastrar"})
    }


router.get('/:id',(req, res) => {
        let id = req.params.id;
        Todo.findById(id, (err, todo) => {
            res.json(todo);
        });
    });

    // const newTodo = new todos({
    //     title,
    //     description
    // });
    // newTodo.save()
    // .then(()=>{
    //     res.send("todo salvo com sucesso")
    // })
    // .catch((err)=>{
    //     res.send("falha ao salvar todo")
    // })
});


module.exports = router;
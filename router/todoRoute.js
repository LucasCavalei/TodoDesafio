const express = require("express");
const router = express.Router();
const Todo = require("../models/todos");

// router.get("/", (req, res)=>{
//     res.send("sou  todo page")
// });

router.get("/", async (req, res) => {
  try {
    const lists = await Todo.find({});
    res.json(lists);
  } catch (err) {
    // linha feia
    res.send("Error").status(400);
  }
});

router.post("/", async (req, res) => {
  const { dia, description } = req.body;
  try {
    const newTodo = await Todo.create(dia, description);
    res.json(newTodo);
    console.log(newTodo);
  } catch (err) {
    console.log(err);
    res.send("Error").status(400);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const oldlist = await Todo.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.json(oldlist);
    {
      console.log(res);
    }
  } catch (err) {
    res.send({ message: "Nao encontrado", err }).status(404);
  }
});
// let id = req.params.id;
// Todo.findById(id, (err, todo) => {
//     res.json(todo);
// });
// });
router.delete("/:id", async (req, res) => {
  try {
    const oldlist = await Todo.findByIdAndDelete(req.params.id);
    res.json(oldlist);
  } catch (err) {
    res.send("Nao encontrado").status(404);
  }
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

module.exports = router;

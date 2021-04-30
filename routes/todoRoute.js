const router = require("express").Router()
const Todo = require("../models/todo")

router.route("/").get((req,res)=>{
    Todo.find()
        .then(todos=>res.json(todos))
        .catch(err => res.status(400).json("Error: " + err))
})

router.route("/").post((req,res)=>{
    const text = req.body.text
    const priority = req.body.priority
    const completed= req.body.completed
    const date= Date.parse(req.body.date)
    const todo = new Todo({
        text, priority,completed,date
    })
    todo.save()
        .then((todo)=>res.json({todo:"todo added!"}))
        .catch(err=>res.status(400).json("error :"+err))
})

router.route("/:id").get((req,res)=>{
    Todo.findById(req.params.id)
        .then((todo)=>res.json(todo))
        .catch(err=>res.status(400).json("error:"+err))
})


router.route("/:id").delete((req,res)=>{
    Todo.findByIdAndDelete(req.params.id)
        .then(()=>res.json("todo deleted !"))
        .catch(err=>res.status(400).json("error:"+err))
})

router.route("/:id").post((req, res)=>{
    Todo.findByIdAndUpdate(req.params.id)
        .then(todos=>{
            todos.text= req.body.text
            todos.priority= req.body.priority
            todos.completed= req.body.completed
    todos.save()
        .then(()=>res.json("updated !")) 
        .catch(err=>res.status(400).json("error :"+err))     
    })
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports= router
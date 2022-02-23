const router=require('express').Router()
const Todo_model=require('../models/todo')


router.post('/add/todo',(req,res)=>{
    const {todo}=req.body;
    const {email_}=req.user.email;
    const newTodo=new Todo_model({todo: req.body.todo, title: req.body.title, email_:req.user.email, done:"0"})
    if(todo==""){
        res.redirect('/')
    }
    newTodo.save()
    .then(()=>{
        console.log("done")
        res.redirect('/')
    })
    .catch(err=>console.log(err))
})

// TODO: not implemented properly
.get("/edit/todo/:_id",(req,res)=>{
    const {_id}=req.params;
    const info=Todo_model.find();
    console.log(info)
    Todo_model.updateOne({_id}, { title:"new title"})
    .then(()=>{
        console.log("updated (title)")
        res.redirect('/')
    })
    .catch((err)=>console.log(err));
})

.get("/delete/todo/:_id",(req,res)=>{
    const {_id}=req.params;
    Todo_model.deleteOne({_id})
    .then(()=>{
        console.log("deleted")
        res.redirect('/')
    })
    .catch((err)=>console.log(err));
})

.get("/update/todo/:_id",(req,res)=>{
    const {_id}=req.params;
    const info=Todo_model.find();
    console.log(info)
    Todo_model.updateOne({_id}, { done:"1"})
    .then(()=>{
        console.log("updated(done:1)")
        res.redirect('/')
    })
    .catch((err)=>console.log(err));
});

module.exports=router;

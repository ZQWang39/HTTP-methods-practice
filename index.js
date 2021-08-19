const data = [];

const express = require('express');
const app = express();
app.use(express.json());



app.post('/tasks',(req,res)=>{
    console.log(req.body)
    if(req.body.id === data.length+1 && req.body.description !==''&& req.body.done === false){
        data.push(req.body);
        res.status(201).json('The task successfully added')
        //res.json(req.body);
    }else{
        res.json("The task you post is incorrect!!!");
    }
    
})

app.get('/tasks',(req,res)=>{
    //console.log(data)
    res.status(200).json(data)
})

app.get('/tasks/:id',(req,res)=>{
   const {id}=req.params;
   let index=-1;
   for (let task of data){
      if(task.id === parseInt(id)){
          index = id-1;
       }
   }
   if(index>=0){
       let task = data[index];
       res.status(200).json(task)
   }else{
       res.status(404).send('Task not found.')
   }
})
app.put('/tasks/:id',(req,res)=>{
    const {id}=req.params;
    // let description = req.body.description;
    let done = req.body.done;

    let index=-1;
    for (let task of data){
      if(task.id === parseInt(id)){
          index = id-1;
       }
    }
    if(index>=0){
       let task = data[index];
       task.done = done;
       res.status(200).json(task);
       
    }else{
       res.status(404).send('Task not found!!!')
    }
   
})

app.delete('/tasks/:id',(req,res)=>{
    const {id}=req.params;
    let index=-1;
    for (let task of data){
      if(task.id === parseInt(id)){
          index = id-1;
       }
    }
    if(index>=0){
       data.splice(index, 1)
       res.status(204).send('The task successfully deleted')
       
    }else{
       res.status(404).send('Task not found!!!')
    }
    
})


app.listen('3000',()=>{
    console.log('Server is running on port 3000...')
})
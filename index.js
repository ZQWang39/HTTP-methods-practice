const data = [];

const express = require('express');
const app = express();
app.use(express.json());



app.post('/tasks',(req,res)=>{
    //console.log(req.body)
    data.push(req.body)
})

app.get('/tasks',(req,res)=>{
    //console.log(data)
    res.json(data)
})

app.get('/tasks/:id',(req,res)=>{
   const {id}=req.params;
   let task;
   data.forEach((item)=>{
       if(item.id === parseInt(id)){
        task = item;
       }
   })
   //console.log(task)
   res.json(task)
})

app.put('/tasks/:id',(req,res)=>{
    const {id}=req.params;
    // let description = req.body.description;
    let done = req.body.done;
    let task;

    data.forEach((item)=>{
        if(item.id === parseInt(id)){
         task = item;
        }
    })
    // task.description = description;
    task.done = done;
    res.json(task);
  
})

app.delete('/tasks/:id',(req,res)=>{
    const {id}=req.params;
    let task;

    data.forEach((item, index)=>{
        if(item.id == id){
         task = index;
        }
    })
    data.splice(task, 1)
})


app.listen('3000',()=>{
    console.log('Server is running on port 3000...')
})
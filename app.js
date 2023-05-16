const express= require('express');
require('./models/index'); // index file is required
const usercontroller=require('./controller/userController'); // userController file is required
const app=express(); 
  app.get('/',(req,res)=>{
    res.send("HAOME PAGE");
  }
  )
 
  app.get('/add',usercontroller.addUser);  //route to usercontroller calls addUser function when add route is called
  app.get('/crud',usercontroller.crudoperation);//route to crud function
  app.get('/query',usercontroller.query);//route to query
  app.get('/finder',usercontroller.finder);
  app.get('/validation',usercontroller.validation);
  app.get('/rawquery',usercontroller.rawquery);
  app.get('/onetoone',usercontroller.oneToOne);
  app.get('/addpost',usercontroller.addpost);
  app.get('/belongto',usercontroller.belongto);
  app.get('/hasmany',usercontroller.hasmany);
  app.get('/manytomany',usercontroller.manytomany);
  app.get('/scope',usercontroller.scope);
  app.get('/polymorphic',usercontroller.polymorphic);
  app.get('/manytomanypolymorphic',usercontroller.manytomanypolymorphic);
  app.post('/adduser',usercontroller.addUser);

app.get('/find',usercontroller.find);
app.get('/delete',usercontroller.finddelete);

app.listen(2999,()=>console.log("app is listenening local host"));
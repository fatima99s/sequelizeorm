
const db=require('../models');
const {Sequelize,Op}=require('sequelize');
const comment = require('../models/comment');
const Users=db. Users;
const Posts=db.Posts;
const Tags=db.Tags;
const post_tag=db.post_tag;
const Image=db.Image;
const Vedio=db.Vedio;
const Comment=db.Comment;


var addUser= async(req,res)=>
 {
    try {
        // Create operation - Insert a new item into the PostgreSQL table
        const item = req.body;
        await Users.create(item);
        res.status(201).json({ message: 'Item created' });
      } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
      }
   /*const data= await Users.build({
        //id:1,
       name:'test',
      //  email:'.com',
       gender:'female',
   });
   const data= await Users.create({
    //id:1,
   name:'fatima',
   email:'fatima@gmail.com',
   gender:'female',*/




   //await data.save();
let response={
    data: "ok",
}
res.status(400).json(response);
 }

 var crudoperation= async(req,res)=>
 { // insert a row in db
   /* const data= await Users.create({
        //id:1,
       name:'fatima',
       email:'fatima@gmail.com',
       gender:'female',
    });*/
    // update a row in db
/*
const data= await Users.update({
        //id:1,
       name:'fa',
       email:'fatima@gmail.com',
       gender:'female',
    },
    {where:{
        id :1,
    }});*/

    // delete on row 

/*    const data=await Users.destroy({
    where:{
        id:1,
    },
})
*/
// delete all rows   truncate
/*
const data=await Users.destroy({
truncate:true,
})
*/

// add rows in bunk
/*const data= await Users.bulkCreate([{
    //id:1,
   name:'fatima',
   email:'fatima@gmail.com',
   gender:'female',
},
{name:'amna',
email:'amna233@gmail.com',
gender:'female',

},{
    name:'ali',
   email:'mali@gmail.com',
   gender:'male',
}],
);*/

// find a row ny id

//const data= await Users.findAll({});

    let response={
        data: 'okk'
    }
    res.status(400).json(response);
 }

 var query= async (req,res)=>{

   /*
   
    const data= await Users.create({
       
       name:'userr',
       email:'auser@gmail.com',
       gender:'female',
    },{
        fields:['email','gender']
    });
   */

    // select data from db

    //let data= await Users.findAll({});
   /*let data =await Users.findAll({
    attributes:[    // arrtibutes is use to select the specific filed of a row
        'name',
        //'email',  
          // if want to chaange the name of field
        ['email','mail_id'],
        [Sequelize.fn('Concat', Sequelize.col('email'), 'ID'), 'emailCount']

       // [ Sequelize.fn('Concat', Sequelize.col('email'),'ID'), ,'emailCount' ]
    ],
    group: ['customer.name', 'email']
   });
   */
  //include and exclude
/*
  let data = await Users.findAll({
    attributes:{exclude:
    [
        'email'

    ],include:[
        [ Sequelize.fn('Concat', Sequelize.col('name'),' KHAN'), 'lastName' ]
    ]},
    
      

  })*/

  //conditions
  /*
   let data = await Users.findAll({
   where:{
    //id:5
    id:{
       [Op.gt]:5
    },
    email:{
        [Op.like]:'%@gmail.com'

    } },
    order:[
        ['name','DESC'],
       // ['email','DESC']
    ]
  ,
 // group: ['email'],
  limit: 2,
offset:1
,
group: ['customer.id','customer.email']
});

   */

  //    ......count..
  //let data=await Users.count({});


   
    let response={
        data: "query",
    }
    res.status(400).json(response);
 }

 var finder=async (req,res)=>{
   // let data= await Users.findByPk(7); // finde by id 

//   let data= await Users.findAndCountAll({
//     where:{
//         email:'fatima@gmail.com'
//     }
//    })
//const itemId = req.params.itemId;
    const data = await Users.findAll({});
    res.status(200).json(data);
  } 


//let data=await Users.findAll({});
/*let [data,created]=await Users.findOrCreate({
    where:{name: 'dummy'},
    defaults:{
        email:"dummy@gamil.com",
        gender:'male'
    }
})*/


   // let response={
    //    data: data,
     //   add: created
   
    //res.status(400).json(response);


 var validation=async (req,res)=>{
     let data=await Users.create({
        name:'new user',
   email:'new13@gmail.com',
   gender:'female',
     })
    let response={
        data:"validation ok"
    }
    res.status(400).json(response);
 }

 var rawquery=(req,res)=>{





    let response={
        data:"raw query"

    }
    res.status(400).json(response);
 }

 var oneToOne= async (req,res)=>
 {
  let data= await Users.findAll(
    
    {
        include:Posts,
    where:
{
    id:8
}
});

    let response={
     data: data,
    }
    res.status(400).json(response);
 }

 var addpost= async (req,res)=>
 {
    let data= await Posts.create(
        {
            name:'AnewUser',
            title:'My first post',
            content:'its my forst post ',
            users_id:4

        }


    )
    let response={
        data: data,
       }
       res.status(400).json(response);
 }

 var belongto=async(req,res)=>
 {
    let data=await Posts.findAll({
        attributes:['content','title'],
        include:[{
            model:Users,
        attributes:['name','email']}],
        where:{
            users_id:8
        }
    });

    let response={
        data:data,
    }
    res.status(400).json(response);
 }

var hasmany= async(req,res)=>
{
    let data= await Users.findAll(
    
        {
            include:Posts,
    //     where:
    // {
    //     id:8
    // }
    });
    
        let response={
         data: data,
        }
        res.status(400).json(response);

}

var manytomany=async(req,res)=>
{  

    //.......post to tags......
    /*let data=await Posts.findAll({
        attributes:['title','content'],
        include:[{
            
          model:Tags,
          attributes:['name']

          
        }
            

        ]
       
    });*/
  
    //.........tags to post......

    let data=await Tags.findAll({
        attributes:['name'],
        include:[{
            required:true,
          model:Posts,
          attributes:['title','name']

          
        }
            

        ]
       
    });


    let response={
        data:data,
    }
    res.status(400).json(response);

    
    
}


var scope=async (req,res)=>
{
   let data= await Users.scope('checkStatus').findAll({});
    let response={
        data:data,
    }
res.status(400).json(response);
}

var polymorphic=async (req,res)=>
{ 
    //.....Image to comment....
   /*let data=await Image.findAll({
    include:[
        {
            model:Comment
        }
    ]
   });*/

   let data=await Comment.findAll({
    include:[
        {
            model:Vedio
        }
    ]
   });

    let response={
        data:data,
    }
res.status(400).json(response);
}

var find=(req,res)=>
{
    Users.findAll()
  .then(users => {
    users.forEach(user => {
      console.log(user.toJSON());
    });
  })
  .catch(error => {
    console.error('Error retrieving users:', error);
  });

  res.status(400).json('hello');
}


var finddelete=(req,res)=>
{
    Users.findAll({
        where:{
            status:2
        }
    })
  .then(users=>
    {
        users.forEach(user=>
            {
                user.destroy();
            });
    })
  .catch(error => {
    console.error('Error retrieving users:', error);
  });

  res.status(400).json('hello');
}

var manytomanypolymorphic=async(req,res)=>
{

    //console.log(res);
let data=await Tags.findAll({
   include:[Image]
   
});

 var result={
    data:data,
 }
    res.status(400).json(result);
}
 module.exports={
    addUser,
    crudoperation ,
    query,
    finder,
   validation,
   rawquery,
   oneToOne,
   addpost,
   belongto,
   hasmany,
   manytomany,
   scope,
   polymorphic,
   find,
   finddelete,
   manytomanypolymorphic
 }
const {Sequelize,DataTypes}= require('sequelize');
//const { FORCE } = require('sequelize/types/index-hints');
const sequelize=new Sequelize('users','postgres','12345',{
    host: 'localhost',
    dialect: 'postgres'

});


  sequelize.authenticate()
  .then(()=>
  {
    console.log("db is connected")
  })
  .catch(err =>{
    console.log("connection failed");
  })

  const db={};
  db.Sequelize=Sequelize;
  db.sequelize=sequelize;
  db.Users=require('./users')(sequelize,DataTypes);
  db.Posts=require('./post')(sequelize,DataTypes);
  db.Tags=require('./tags')(sequelize,DataTypes);
  db.post_tag=require('./post_tag')(sequelize,DataTypes);
  db.Image=require('./image')(sequelize,DataTypes);
  db.Vedio=require('./vedio')(sequelize,DataTypes);
  db.Comment=require('./comment')(sequelize,DataTypes);
  db.tagable=require('./tagable')(sequelize,DataTypes);


//........scope.......
   db.Users.addScope('checkStatus',{
    where:{
      status:1,
      gender:'male'
    }
   })



  // make the relation between customer table and post table

  //db.Users.hasOne(db.Posts,{ foreignKey:'users_id'});   // for one to one 

  // for one to many
 db.Users.hasMany(db.Posts,{ foreignKey:'users_id'});   // for one to many
  db.Posts.belongsTo(db.Users,{foreignKey:'users_id'});


  //......many to many rrelation between posts and tags.....
  db.Posts.belongsToMany(db.Tags,{through: 'post_tag'});
  db.Tags.belongsToMany(db.Posts,{through:'post_tag'});

//..........one to many polymorphic association.......
  
db.Image.hasMany(db.Comment,{
  foreignKey:'commentId',
  constraints:false,
  scope:{
    commentType:'image',
  }

});
db.Vedio.hasMany(db.Comment,{
  foreignKey:'commentId',
  constraints:false,
  scope:{
    commentType:'vedio',
  }

});

db.Comment.belongsTo(db.Image,{
  foreignKey:'commentId',
  constraints:false,
});

db.Comment.belongsTo(db.Vedio,{
  foreignKey:'commentId',
  constraints:false,
});


//............many to many polymorphic relation.......

//image relation to tag....  (image to tag)

db.Image.belongsToMany(db.Tags,{
  through:{
    model: db.tagable,
    unique:false,
    foreignKey:'tagableId',
    constraints:false,
    scope:{
      tagableType:'image'
    },
    
  }}
);

//tag to image....

db.Tags.belongsToMany(db.Image,{
  through:{
    model: 'tagable',
    unique:false,
    scope:{
      tagableType:'image'
    },
    foreignKey:'tadId',
    constraints:false
  }
});


//.........vedio relation to tag...(vedio to tag)

db.Vedio.belongsToMany(db.Tags,{
  through:{
    model: 'tagable',
    unique:false,
    scope:{
      tagableType:'vedio'
    },
    foreignKey:'tagableId',
    constraints:false
  }}
);

//......tag to vedio
db.Tags.belongsToMany(db.Vedio,{
  through:{
    model: 'tagable',
    unique:false,
    scope:{
      tagableType:'vedio'
    },
    foreignKey:'tadId',
    constraints:false
  
  }}
);



  module.exports = db;


  db.sequelize.sync({force:false})
  .then(() => {
    console.log('Database and tables synced!');
  });
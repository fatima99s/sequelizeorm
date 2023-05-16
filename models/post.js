
module.exports=(sequelize,DataTypes)=>
{
    const Posts=sequelize.define("post",{
        name: DataTypes.STRING,
       title:DataTypes.STRING,
       content: DataTypes.STRING,
    
       users_id: {
        type: DataTypes.INTEGER,
       
    }}
    
   , {
  
        timestamps:false,
    });
   return Posts;
} 


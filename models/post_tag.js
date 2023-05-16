module.exports=(sequelize,DataTypes)=>
{
    const Posts_Tags=sequelize.define("post_tag",{
    postId:DataTypes.INTEGER,
    tagId:DataTypes.INTEGER  
    
    }
    
   , {
  
        timestamps:false,
    });
   return Posts_Tags;
} 

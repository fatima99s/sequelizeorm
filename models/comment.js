module.exports=(sequelize,DataTypes)=>
{
    const Comment=sequelize.define("comment",{
        title: DataTypes.STRING,
        commentId: DataTypes.INTEGER,
        commentType:DataTypes.STRING,
       }
    
   , {
  
        timestamps:false,
    });
   return Comment;
} 

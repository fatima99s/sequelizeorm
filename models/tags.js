module.exports=(sequelize,DataTypes)=>
{
    const Tags=sequelize.define("tags",{
        name: DataTypes.STRING,
       }
    
   , {
  
        timestamps:false,
    });
   return Tags;
} 

module.exports=(sequelize,DataTypes)=>
{
    const Image=sequelize.define("image",{
        title: DataTypes.STRING,
        url:DataTypes.STRING,

       }
    
   , {
  
        timestamps:false,
    });
   return Image;
} 

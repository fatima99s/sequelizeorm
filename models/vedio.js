module.exports=(sequelize,DataTypes)=>
{
    const Vedio=sequelize.define("vedio",{
        title: DataTypes.STRING,
        text: DataTypes.STRING,
       }
    
   , {
  
        timestamps:false,
    });
   return Vedio;
} 

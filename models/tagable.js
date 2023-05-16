module.exports=(sequelize,DataTypes)=>
{
    const Tagable=sequelize.define("tagable",{
      tadId:{
        type:DataTypes.INTEGER,
        unique: 'tt_unique_constraint',

      },
       tagableId:{
        type:DataTypes.INTEGER,
        unique: 'tt_unique_constraint',
        references:null,
       },
       tagableType:{
        type:DataTypes.STRING,
        unique: 'tt_unique_constraint',
       }
       }
    
   , {
  
        timestamps:false,
    });
   return Tagable;
} 

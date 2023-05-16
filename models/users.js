

module.exports=(sequelize,DataTypes)=>
{
    const Users=sequelize.define('customer',{
        name: DataTypes.STRING(),
        email:{

            type:DataTypes.STRING(),
            defaultValue: 'test@gmail.com',
            //allowNull:false,
           // unique:false
        },
        gender:{
          type:DataTypes.STRING(),

        },
        status: DataTypes.INTEGER(),

    },
    {
        timestamps:false,
    });
   return Users;
};


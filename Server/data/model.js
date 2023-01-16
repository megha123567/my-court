const {Sequelize, DataTypes} = require('sequelize');

// Create instance of sequalize
const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'Megha@2001',
    database: 'CourtCase'
});

const Role = sequelize.define('Role', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    role: {
        type: DataTypes.STRING,
        allowNull: false
    }

});


//Define User model
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    name : {
        type : DataTypes.STRING(50),
        allowNull : false
    },
    phone : {
        type : DataTypes.BIGINT,
        allowNull : false
    },
    address : {
        type : DataTypes.STRING(100),
        allowNull : false
    },
    dob : {
        type : DataTypes.DATEONLY,
        allowNull : false
    },

    barCouncilNo : {
        type : DataTypes.STRING(20),
        allowNull : true
    },
    specialization :
    {
        type : DataTypes.STRING(50),
        allowNull : true
    },
    lawyer :
    {
        type : DataTypes.STRING(20),
        allowNull : true
    },
    token: {
        type: DataTypes.INTEGER
    },
    roleId : {
        type : DataTypes.INTEGER,
        references : 
        {
              to : Role,
              allowNull : false
        }
    }
});

Role.hasOne(User,{
    
    sourceKey : 'id',
    foreignKey : 'roleId',
    constraints: true,
    onDelete: 'CASCADE'
})
User.belongsTo(Role,
    {
        foreignKey : 'roleId',
        targetKey : 'id'
    })
   

//Define Appointment model
const Appointment = sequelize.define('Appointment',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    casedesc: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    date: {
        type: DataTypes.DATEONLY
    },
    time: {
        type: DataTypes.TIME
    },
    lawyer: {
        type: DataTypes.STRING(10)
    },
    customerId: {
        type: DataTypes.INTEGER
    },
    status: {
        type: DataTypes.STRING(100)
    }
    
})


// Define case model
const Case = sequelize.define('Case',{
   
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    caseno : {
        type : DataTypes.STRING(50),
        allowNull : false
    },
    casedesc : {
        type : DataTypes.STRING(300),
        allowNull : true
    },
    casetype : {
        type : DataTypes.STRING(10),
        allowNull : false
    },
    paymentstatus : {
        type : DataTypes.STRING(10),
        allowNull : false
    },
    
    appointmentId: {
        type: DataTypes.INTEGER,
        references:{
            to: Appointment,
            allowNull: false
        }
    }
});

// Create associations

Appointment.hasMany(Case, {
    sourceKey: 'id',
    foreignKey: 'appointmentId',
    constraints: true,
    onDelete: 'CASCADE',
});
Case.belongsTo(Appointment, {
    foreignKey: 'appointmentId',
    targetKey: 'id',
});


module.exports.Role = Role;
module.exports.User = User;
module.exports.Case = Case;
module.exports.Appointment = Appointment;
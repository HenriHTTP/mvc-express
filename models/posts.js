const databases = require("../databases/conn");


const posts =  databases.sequelize.define('posts',{
    title: {
        type : databases.Sequelize.STRING(100),
        allowNull: false
    },
    content: {
        type : databases.Sequelize.TEXT,
        allowNull: false
    },
    notes: {
        type : databases.Sequelize.TEXT,
        allowNull: true,
    }

});


module.exports = posts
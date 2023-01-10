import Sequelize from 'sequelize';

// Create databse object
const db = new Sequelize(
    'infinite_db',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

export default db;
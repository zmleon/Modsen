const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    db: {
        name: process.env.DB_NAME || 'Meetups',
        user: process.env.DB_USER || 'postgres',
        pass: process.env.DB_PASS || '19374628',
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || '5000'
    }

};
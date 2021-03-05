require('dotenv').config();
const pgPromise = require('pg-promise');

const pgp = pgPromise({});

const config = {
    host: process.env.HOST,
    port: process.env.DB_PORT,
    database: process.env.DB,
    user: process.env.USER,
    password: process.env.PWD
};

const connection = pgp(config);

exports.connection = connection;
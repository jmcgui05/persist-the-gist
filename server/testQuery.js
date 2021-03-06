const { connection } = require("./db");

connection.one('select * from favorites')
    .then(res => {
        console.log(res);
    });
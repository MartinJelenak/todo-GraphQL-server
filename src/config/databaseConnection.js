const MongoClient = require('mongodb').MongoClient;

let mongoDB;

const setupDB = callback => {
    const uri = 'mongodb+srv://Langos:TestovacieHeslo2@todos.fl854.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' // paste uri from mongoDB atlas here and input your db user credentials


    MongoClient.connect(
        uri,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (err, client) => {
            mongoDB = client.db('full-stack-server');

            if (err) {
                return callback(err);
            } else {
                return callback('DB OK');
            }
        }
    );
};

const getDB = () => {
    return mongoDB;
};

module.exports = { setupDB, getDB };
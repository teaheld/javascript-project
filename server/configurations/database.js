const mongoose = require('mongoose');


const connectToDB = (database = 'bayernminds') => {
    mongoose.connect(`mongodb://localhost:27017/${database}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            mongoose.connection.db.dropDatabase();

            console.log(`Connected to the database ${database}!`);
        })
        .catch(err => {
            console.error(err);
            process.exit(1);
        });
};


module.exports = { connectToDB };
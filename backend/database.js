const mongoose = require("mongoose");
const URI = process.env.MONGODB_URL || 'mongodb://localhost:27017/books-app';

//connect mongodb
mongoose.connect(URI, { useCreateIndex: true, useNewUrlParser: true })
    .then(db => console.log('DB is Connected'))
    .catch(err => console.error(err));

module.exports = mongoose;
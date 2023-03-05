const mongoose = require('mongoose');
const userDAO = require('./dao/userDAO');
const User = require('./models/user')
const { MongoMemoryServer } = require('mongodb-memory-server');
const session = require("express-session");
const express = require('express');
const authRoutes = require('./routes/auth');
const bookRoutes = require('./routes/book');
const userRoutes = require('./routes/user');


async function startInMemoryMongoDB() {
    let mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();

    await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}


async function main(){
    const server = express();
    await startInMemoryMongoDB()

    server.use('/auth', authRoutes);
    server.use('/books', bookRoutes);
    server.use('/user', userRoutes);



    exports.initializeSession = session({
        secret: 'secret',
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 86400000 } // 1 day
    });

    server.listen(3000, () => {
        console.log(`Server started`);
    });
}

main()
const mongoose = require('mongoose');
const userDAO = require('./dao/userDAO');
const User = require('./models/user')
const { MongoMemoryServer } = require('mongodb-memory-server');
const session = require("express-session");
const express = require('express');
const authRoutes = require('./routes/auth');
const bookRoutes = require('./routes/book');
const userRoutes = require('./routes/user');
const MongoStore = require('connect-mongo');


async function startInMemoryMongoDB() {
    let mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();

    await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}



async function main(){
    await mongoose.connect("mongodb://root:secret@localhost:27017/simple_library?authSource=admin", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const server = express();
    server.use(express.json());

    server.use(session({
        secret: 'secret',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 86400000 },
        store: MongoStore.create({mongoUrl: mongoose.connection.client.s.url } )
    }));

    server.use('/auth', authRoutes);
    server.use('/books', bookRoutes);
    server.use('/user', userRoutes);

    server.listen(3000, () => {
        console.log(`Server started`);
    });
}

main()
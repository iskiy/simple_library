const mongoose = require('mongoose');
const session = require("express-session");
const cors = require('cors');
const express = require('express');

const authRoutes = require('./routes/auth');
const bookRoutes = require('./routes/book');
const userRoutes = require('./routes/user');
const MongoStore = require('connect-mongo');
const cookieParser = require('cookie-parser');



async function main(){
    await mongoose.connect("mongodb://root:secret@localhost:27017/simple_library?authSource=admin", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });


    const server = express();
    server.use(express.json());
    server.use(cookieParser());
    server.use(cors({ origin: 'http://localhost:3000', credentials: true }));
    // server.use(cors());
    server.use(session({
        secret: 'secret',
        resave: false,
        saveUninitialized: true,
        store: MongoStore.create({mongoUrl: mongoose.connection.client.s.url } )
    }));

    server.use('/auth', authRoutes);
    server.use('/books', bookRoutes);
    server.use('/user', userRoutes);


    server.listen(8888, () => {
        console.log(`Server started`);
    });
}

main()
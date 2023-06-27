import mongoose from 'mongoose';
import dotenv from "dotenv"

const databaseUrl = process.env.DATABASE_URL;

mongoose.connect('mongodb://localhost/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: process.env.PROJECTS_NS,
});

const db = mongoose.connection;
db.on('connected', () => {
    console.log('Connected to MongoDB');
});

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

export default db;
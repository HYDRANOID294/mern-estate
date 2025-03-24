import express from 'express';
import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://<mern-estate>:<mern>@mern-estate.g2u5l.mongodb.net/?retryWrites=true&w=majority&appName=mern-estate")

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
}
);
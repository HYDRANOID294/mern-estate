import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.route.js';
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB !');
})
.catch((err) => {
    console.log(err);
});

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
}
);

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});

// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import userRouter from './routes/user.routes.js';
// import authRouter from './routes/auth.route.js';

// dotenv.config();

// mongoose.connect(process.env.MONGO, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverSelectionTimeoutMS: 10000, // Timeout after 10s instead of 30s
//   socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
// }).then(() => {
//   console.log('Connected to MongoDB!');
// }).catch((err) => {
//   console.error('MongoDB connection error:', err);
// });

// const app = express();

// app.use(express.json());

// app.listen(3000, () => {
//   console.log('Server is running on port 3000!');
// });

// app.use('/api/user', userRouter);
// app.use('/api/auth', authRouter);

// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode || 500;
//   const message = err.message || 'Internal Server Error';
//   return res.status(statusCode).json({
//     success: false,
//     statusCode,
//     message,
//   });
// });
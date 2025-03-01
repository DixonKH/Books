import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URL as string, {}).then((data) => {
    console.log('Connected to the database');
    const PORT = process.env.PORT ?? 3000;
})
.catch((error) => {
    console.log('Error connecting to the database');
    console.log(error);
});
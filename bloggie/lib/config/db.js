import mongoose from 'mongoose';

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://billyghy:jMBy0cWcHI9O9L6i@cluster0.q9nvw.mongodb.net/bloggie')
    console.log('Connected to MongoDB');
}
import mongoose from 'mongoose';

let isConnected = false; //cariable to check if mongoodb is connected

export const connectToDB = async () =>{
    mongoose.set('strictQuery', true);

    if(!process.env.MOBGODB_URL) return console.log('MONGODB not found');
    if(isConnected) return console.log('MONGODB is connected');


    try {
        await mongoose.connect(process.env.MONGODB_URL);

        isConnected = true;

    } catch (error) {
        console.log(error);
        
    }
    
    
}
import mongoose from "mongoose";

export const connect = async () => {
    try {
        await mongoose.connect("mongodb+srv://dima:raptor315@cluster0.3tt9x.mongodb.net/Articles?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log("Connected To DB!");
    } catch (e) {
        console.error(e);        
        process.exit(1);
    }
}


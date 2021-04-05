import mongoose from "mongoose";
import config from "config";

export const connect = async () => {
    try {
        await mongoose.connect(config.get("MONGO_URI"), {
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


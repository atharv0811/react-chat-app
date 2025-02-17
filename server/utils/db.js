import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`DB Connected`);
    } catch (error) {
        console.log("MONGODB Connection Error ", error);
        process.exit(1)
    }
};

export default dbConnect;
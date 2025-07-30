import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    if (connect.connection.readyState == 1) {
      console.log("Db is connected");
    } else {
      console.log("db is not connected");
    }
  } catch (error) {
    console.log("Connect Db error =>", error);
  }
};

export default connectDb;

import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "MWAR",
    };

    await mongoose.connect(DATABASE_URL, DB_OPTIONS);

    console.log("connected sucessfully.....");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;

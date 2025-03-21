import mongoose from "mongoose";

const connectDb = async (dbRef) => {
  try {
    await mongoose.connect(dbRef);
    console.log("Успешно подключён к базе данных!");
  } catch (error) {
    console.error(`ERROR ${error.message}`);
    process.exit(1);
  }
};

export default connectDb;

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const dbURL = process.env.mongoURL!;
    await mongoose.connect(dbURL, {dbName: "notes"});
    process.stdout.write("Database connected\n");
  } catch (error) {
    process.stdout.write(`Error connecting to database ${error}\n`);
    process.exit(1);
  }
};

export default connectDB;

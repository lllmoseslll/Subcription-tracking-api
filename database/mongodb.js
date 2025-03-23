import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";
// import { DB_URL, NODE_ENV } from "./config/env.js";

if (!DB_URI) {
  throw new Error(
    "MONGODB_URI is not defined in the environment variables inside .env<development/production>.local"
  );
}

const connectToDatabase = async () => {
  try {
    console.log(`Connecting to database in  ${NODE_ENV} mode`);

    await mongoose.connect(DB_URI);
    console.log(`Connected to database ${DB_URI}`);
  } catch (error) {
    console.log("error connecting to the database", error);
  }
};

export default connectToDatabase;

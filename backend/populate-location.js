import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import connectDb from "./db/connect.js";
import Location  from "./models/Locations.js";
import { readFile } from "fs/promises";

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    Location.deleteMany();
    const jsonLocation = JSON.parse(
      await readFile(new URL("./location-data.json", import.meta.url))
    );
    await Location.create(jsonLocation);
    console.log("Location created successfully!!!");
    process.exit(0);
  } catch (error) {
    console.log(`❌${error}`);
    process.exit(1);
  }
};
start();
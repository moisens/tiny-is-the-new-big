import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import connectDb from "./db/connect.js";
import Product from "./models/Product.js";
import { readFile } from "fs/promises";

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    Product.deleteMany();
    const jsonProduct = JSON.parse(
      await readFile(new URL("./mock-data.json", import.meta.url))
    );
    await Product.create(jsonProduct);
    console.log("✅Products created successfully!!!");
    process.exit(0);
  } catch (error) {
    console.log(`❌${error}`);
    process.exit(1);
  }
};
start();

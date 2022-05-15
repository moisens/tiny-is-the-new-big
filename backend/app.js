import dotenv from "dotenv";
dotenv.config();
import express from "express";

const app = express();

import fileUploads from "express-fileupload";
import cloudinary from "cloudinary";
const cloud = cloudinary.v2;
cloud.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

//cors
import morgan from "morgan";

//database
import connectDb from "./db/connect.js";

//Routes
import productRouters from "./routes/productRoutes.js";

//Errors middlewares
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";

import cors from "cors";

//middleware
app.use(cors())
app.use(morgan("tiny"));
app.use(express.json());
app.use(fileUploads({ useTempFiles: true }));

app.get("/", (req, res) => {
  res.send("App tiny housing");
});

app.get("/api/v1", (req, res) => {
  res.send("tinyhousing");
});

app.use("/api/v1/products", productRouters);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`✅Server started on port: ${port}`);
    });
  } catch (error) {
    console.log(`❌${error}`);
  }
};
start();

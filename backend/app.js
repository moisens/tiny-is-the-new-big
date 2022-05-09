import dotenv from "dotenv";
dotenv.config();
import express from "express";

const app = express();

//cors
import morgan from "morgan";

//database
import connectDb from "./db/connect.js";

//Routes
import productRouters from "./routes/productRoutes.js";

//middleware
app.use(morgan("tiny"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("App tiny housing");
});

app.get("/api/v1", (req, res) => {
  res.send("tinynest, petit nid");
});

app.use("/api/v1/products", productRouters);

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

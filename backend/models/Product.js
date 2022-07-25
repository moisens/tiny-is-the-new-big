import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    //name: {
    //  type: String,
    //  trim: true,
    //  required: [true, "Provide a product name"],
    //  maxLength: [100, "Name can't be more than 100"],
    //},
    country: {
      type: String,
      trim: true,
      required: [true, "Provide a country"],
    },
    price: {
      type: Number,
      required: [true, "Provide a price of the product"],
      default: 0,
    },
    ref: {
      type: Number,
      required: [true, "Provide a ref for the product"],
    },
    size: {
      type: Number,
      required: [true, "Provide a size for the product"],
    },
    bedroom: {
      type: Number,
      required: [true, "Provide the number of bedroom"],
    },
    bathroom: {
      type: Number,
      required: [true, "Provide the number of bathroom"],
    },
    kitchen: {
      type: Number,
      required: [true, "Provide the number of kitchen"],
    },
    livingroom: {
      type: Number,
      required: [true, "provide the number of living room"],
    },
    description: {
      type: String,
      required: [true, "Provide a description"],
    },
    statusofhouse: {
      type: String,
      required: [true, "Provide the status of the house"],
    },
    yearofconstruction: {
      type: String,
    },
    energyclass: {
      type: String,
      required: [true, "Provide the energy class of the house"],
    },
    pebuniquecode: {
      type: String,
      required: [true, "Provide the P.E.B unique code"],
    },
    espec: {
      type: String,
      required: [true, "Provide the E-spec of the house"],
    },
    typeofheating: {
      type: String,
      required: [true, "Provide the type of heating of the house"],
    },
    image: {
      type: [String],
      require: [true, "Provide an image for the product"],
    },
    category: {
      type: String,
      required: [true, "Provide a category for the product"],
      enum: ["buy", "rent"],
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;

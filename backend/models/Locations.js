import mongoose from "mongoose";

const LocationSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      trim: true,
      required: [true, "Please provide a country for the location"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description for the location"],
      maxLength: [1000, "Description can't be more than 1000 characters"],
    },
    image: {
      type: [String],
      required: [true, "Please provide at least an image"],
    },
    reviewers: {
      type: [String],
      required: false,
    },
    averageRating: {
      type: Number,
      default: 0,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Location = mongoose.model("Location", LocationSchema);
export default Location;

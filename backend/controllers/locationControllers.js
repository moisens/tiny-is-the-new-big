import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";
import Location from "../models/Locations.js";
import cloudinary from "cloudinary";
import fs from "fs";

const cloud = cloudinary.v2;

const createLocation = async (req, res) => {
  const location = await Location.create(req.body);
  res.status(StatusCodes.CREATED).json({ location });
};

const getAllLocations = async (req, res) => {
  const locations = await Location.find({});
  const totalLocations = await Location.countDocuments({});
  res.status(StatusCodes.OK).json({ locations, totalLocations });
};

const getSingleLocation = async (req, res) => {
  const { id: locationId } = req.params;
  const location = await Location.findOne({ _id: locationId });
  res.status(StatusCodes.OK).json({ location });
};

const updateLocation = async (req, res) => {
  const { id: locationId } = req.params;
  const { country, description } = req.body;

  if (country === "" || description === "")
    throw new BadRequestError("Make sure you provide all the values!");

  const location = await Location.findOneAndUpdate(
    { _id: locationId },
    req.body,
    { new: true, runValidators: true }
  );
  if (!location)
    throw new NotFoundError(
      `Sorry, there is no location with the id: ${locationId}`
    );
  res.status(StatusCodes.OK).json({ location });
};

const deleteLocation = async (req, res) => {
  const { id: locationId } = req.params;
  const location = await Location.findOne({ _id: locationId });

  if (!location)
    throw new NotFoundError(
      `Sorry, there is no location with id: ${locationId}`
    );
  await location.remove();
  res.status(StatusCodes.OK).json({ location });
};

const uploadLocationImage = async (req, res) => {
  const result = await cloud.uploader.upload(req.files.image.tempFilePath, {
    use_filename: true,
    folder: "tiny-housing",
  });
  fs.unlinkSync(req.files.image.tempFilePath);
  return res.status(StatusCodes.OK).json({ image: { src: result.secure_url } });
};

export {
  createLocation,
  getAllLocations,
  getSingleLocation,
  updateLocation,
  deleteLocation,
  uploadLocationImage,
};

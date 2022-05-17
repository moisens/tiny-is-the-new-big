import express from "express";
import {
  createLocation,
  getAllLocations,
  getSingleLocation,
  updateLocation,
  deleteLocation,
  uploadLocationImage,
} from "../controllers/locationControllers.js";

const router = express.Router();

router.route("/").post(createLocation).get(getAllLocations);
router.route("/uploads").post(uploadLocationImage);
router
  .route("/:id")
  .get(getSingleLocation)
  .patch(updateLocation)
  .delete(deleteLocation);

export default router;

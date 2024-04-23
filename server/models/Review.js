import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  consoleId: { type: mongoose.Schema.Types.ObjectId, required: true },
  reviewText: { type: String, required: true },
  reviewRating: { type: Number, required: true },
});

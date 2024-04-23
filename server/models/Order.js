import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  consoleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Console",
    required: true,
  },
  dateAndTimeStart: { type: mongoose.Schema.Types.Date, required: true },
  dateAndTimeFinish: { type: mongoose.Schema.Types.Date, required: true },
  orderStatus: { type: String, required: true },
});

import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  firstName: { type: String },
  secondName: { type: String },
  sex: { type: String },
  email: { type: string },
  birthDate: { type: mongoose.Schema.Types.Date },
  address: { type: String },
  avatar: { type: String },
});

export default mongoose.model("Profile", profileSchema);

import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  firstName: { type: String },
  secondName: { type: String },
  sex: { type: String },
  phoneNumber: { type: String },
  birthDate: { type: Object },
  avatar: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.model("Profile", profileSchema);

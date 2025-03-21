import mongoose from "mongoose";

const consoleSchema = new mongoose.Schema({
  consoleName: { type: String, required: true },
  consoleDescription: { type: String, reuired: true },
  consoleCategory: { type: String, required: true },
  consoleStatus: { type: String, required: true },
  price: { type: mongoose.Schema.Types.Decimal128, required: true },
  accessibility: { type: String, required: true },
  consoleImage: { type: String, required: true },
});

const Console = mongoose.model("Console", consoleSchema);

export default Console;

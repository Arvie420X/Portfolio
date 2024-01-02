import { model, Schema } from "mongoose";

// Declare the Schema of the Mongo model
const skillsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    data: {
      type: String,
      required: true,
    },
    originalname: {
      type: String,
      required: true,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Export the model
export default model("Skills", skillsSchema);

import { model, Schema } from "mongoose";

// Declare the Schema of the Mongo model
const projectSchema = new Schema({
  name: String,
  platform: String,
  img: {
    data: {
      type: String,
      required: true,
    },
    originalname: {
      type: String,
      required: true,
    },
  },
  src: String,
  github: String,
  tech: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Export the model
export default model("Project", projectSchema);

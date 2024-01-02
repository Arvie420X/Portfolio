import { model, Schema } from "mongoose";

// Declare the Schema of the Mongo model
var experienceSchema = new Schema({
  title: String,
  institution: String,
  logo: {
    data: {
      type: String,
      required: true,
    },
    originalname: {
      type: String,
      required: true,
    },
  },
  iconBg: String,
  date: String,
  points: [String],
});

//Export the model
export default model("Experience", experienceSchema);

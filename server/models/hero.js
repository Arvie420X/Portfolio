import { model, Schema } from "mongoose";

// Declare the Schema of the Mongo model
var heroSchema = new Schema({
  skills: [
    {
      type: String,
      required: true,
      unique: true,
    },
  ],
  position: {
    type: String,
    required: true,
    unique: true,
  },
  resume: {
    type: String,
    required: true,
    unique: true,
  },
});

//Export the model
export default model("Hero", heroSchema);

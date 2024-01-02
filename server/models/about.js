import { model, Schema } from "mongoose";

// Declare the Schema of the Mongo model
var aboutSchema = new Schema({
  image: {
    data: {
      type: String,
      required: true,
    },
    originalname: {
      type: String,
      required: true,
    },
  },
  paragraph: {
    type: String,
    required: true,
  },
});

//Export the model
export default model("About", aboutSchema);

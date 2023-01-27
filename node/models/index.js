import mongoose from "mongoose";
import Products from "./Products.js";

const connectDb = () => {
  mongoose.set("strictQuery", true);
  mongoose.connect("mongodb://127.0.0.1:27017/Test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('**mongoDB connected**'))
    .catch((err) => console.log(err._message));
};


const models = {Products}
export { models, connectDb };

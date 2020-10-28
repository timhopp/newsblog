import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Favorites = new Schema(
  {
    title: { type: String, required: true },
    url: { type: String, required: false },
    urlToImage: { type: String, required: true },
    description: { type: String, required: false },
    content: { type: String, required: false },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Favorites;

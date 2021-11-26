const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Course = new Schema({
  name: {
    type: String,
    maxLength: 255,
  },
  description: {
    type: String,
    maxLength: 600,
  },
  image: {
    type: String,
    maxLength: 255,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  slug: { type: String, slug: "name", unique: true },
  videoId: { type: String, required: true },
});

module.exports = mongoose.model("Course", Course);

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 100},
  //description: { type: String, required: true },
});

// Virtual for book's URL
GenreSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/${this._id}`;
});

// Export model
module.exports = mongoose.model("Genre", GenreSchema);
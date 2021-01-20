const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating a schema, sort of like working with an ORM
const WeblinkSchema = new Schema({
  ID: {
    type: String,
    required: [true, "'ID' field is required."],
  },
  title: {
    type: String,
    required: [true, "'title' field is required."],
  },
  url: {
    type: String,
    required: [true, "'url' field is required."],
  },
});

// Creating a table within database with the defined schema
const Weblink = mongoose.model("weblink", WeblinkSchema);

// Exporting table for querying and mutating
module.exports = Weblink;

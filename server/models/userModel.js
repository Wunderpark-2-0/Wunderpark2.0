const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//currently, the database stores a collection of User documents, where each user has a name and an object of parks visited.

//parks visited: {park_code: {details: , activities: , notes: }, date_visited: ...}
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    parksVisited: {},
  },
  { minimize: false } //lets you initialize parksVisited as empty, because by default MongoDB doesnt allow for empty objects as values
);

module.exports = mongoose.model("user", userSchema);

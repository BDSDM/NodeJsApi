const mongoose = require("mongoose");

const PostsModel = mongoose.model(
  "node-api",
  {
    author: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  "posts"
);
module.exports = { PostsModel };

/* {
    "_id": "drako",
    "nom": "Drako",
    "espece": "kangourou",
    "naissance": "",
    "deces": "",
    "sexe": "M",
    "observations": "",
    "position": "dedans"
  } */

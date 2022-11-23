const express = require("express");
const { isObjectIdOrHexString } = require("mongoose");
const { PostsModel } = require("../models/postsModel");
const router = express.Router();
const ObjectID = require("mongoose").Types.ObjectId;

router.get("/:id", (req, res) => {
  PostsModel.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error: " + err);
  });
});

router.get("/", (req, res) => {
  PostsModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error: " + err);
  });
});

router.post("/", (req, res) => {
  const newRecord = new PostsModel({
    author: req.body.author,
    message: req.body.message,
  });
  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to create: " + err);
  });
});

router.put("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown: " + req.params.id);
  const updateRecord = {
    author: req.body.author,
    message: req.body.message,
  };
  PostsModel.findByIdAndUpdate(
    req.params.id,
    { $set: updateRecord },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Update error : " + err);
    }
  );
});
router.delete("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown: " + req.params.id);

  PostsModel.findByIdAndRemove(
    req.params.id,

    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Delete error : " + err);
    }
  );
});

module.exports = router;

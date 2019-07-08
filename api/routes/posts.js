const express = require("express");
const router = express.Router();
const db = require("../models");

router.get('/', function(req, res) {
    const limit = req.query.loadrecent ? parseInt(req.query.loadrecent) : 999;

    db.Post.find().sort({ _id: -1 }).limit(limit)
        .then(function (posts) {
            res.json(posts);
        })
        .catch(function (err) {
            res.send(err);
        })
});

router.post("/", function (req, res) {
    db.Post.create(req.body)
        .then(function (newPost) {
            res.status(201).json(newPost);
        })
        .catch(function (err) {
            res.send(err);
        })
});

router.get("/:postId", async (req, res) => {
    try {
        const foundPost = await db.Post.findById(req.params.postId)
        const location = await db.Neighborhood.find({name: foundPost.location});

        res.json({...foundPost._doc, location: location[0]});
    } catch (err) {
        res.send(err);
    }
});

module.exports = router;

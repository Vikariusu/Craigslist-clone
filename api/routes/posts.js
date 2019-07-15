const express = require("express");
const router = express.Router();
const db = require("../models");
const mongoose = require('mongoose');

router.get('/', function(req, res) {
    const limit = req.query.loadrecent ? parseInt(req.query.loadrecent) : 999;
    const { category, postIds } = req.query;
    const query = {};

    if (category) {
        query.category = category;
    }

    if (postIds) {
        query._id = {
            $in: postIds.split(',').map((postId) => mongoose.Types.ObjectId(postId))
        }
    }

    db.Post.find(query).sort({ _id: -1 }).limit(limit)
        .then(function (posts) {
            res.json(posts);
        })
        .catch(function (err) {
            res.send(err);
        })
});

router.post('/', async (req, res) => {
    db.Post.create(req.body)
        .then(function (newPost) {
            res.status(201).json(newPost);
        })
        .catch(function (err) {
            res.send(err);
        })
});

router.get('/:postId', async (req, res) => {
    try {
        const foundPost = await db.Post.findById(req.params.postId)
        const location = await db.Neighborhood.find({name: foundPost.location});

        res.json({...foundPost._doc, location: location[0]});
    } catch (err) {
        res.send(err);
    }
});

module.exports = router;

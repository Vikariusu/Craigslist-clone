const express = require("express");
const router = express.Router();
const db = require("../models");
const mongoose = require('mongoose');

router.get('/', function (req, res) {
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
    console.log(req.body.price);
    const neighborhood = await db.Neighborhood.findOne({ name: req.body.location });
    const price = req.body.price || 0; // if price is not given set it to 0

    db.Post.create({ ...req.body, neighborhood: neighborhood._id, price: price })
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
        const neighborhood = await db.Neighborhood.findById(foundPost.neighborhood);

        res.json({ ...foundPost._doc, neighborhood: neighborhood });
    } catch (err) {
        res.send(err);
    }
});

module.exports = router;

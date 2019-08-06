const express = require("express");
const router = express.Router();
const db = require("../models");

router.get('/', function (req, res) {
    db.Category.find()
        .then(function (categories) {
            res.json(categories);
        })
        .catch(function (err) {
            res.send(err);
        })
});

router.post("/", function (req, res) {
    db.Category.create({...req.body, _id: req.body.name})
        .then(function (newCategory) {
            res.status(201).json(newCategory);
        })
        .catch(function (err) {
            res.send(err);
        })
});

router.get("/:categoryId/posts", function (req, res) {
    db.Post.find({category: req.params.categoryId})
        .then(function (posts) {
            res.json(posts);
        })
        .catch(function (err) {
            res.send(err);
        })
});

router.get("/:categoryId", function (req, res) {
    db.Category.findById(req.params.categoryId)
        .then(function (foundCategory) {
            res.json(foundCategory);
        })
        .catch(function (err) {
            res.send(err);
        })
});

module.exports = router;

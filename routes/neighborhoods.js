const express = require("express");
const router = express.Router();
const db = require("../models");

router.get('/', function (req, res) {
    db.Neighborhood.find()
        .then(function (neighborhoods) {
            res.json(neighborhoods);
        })
        .catch(function (err) {
            res.send(err);
        })
});

router.post("/", function (req, res) {
    console.log(req.body);
    db.Neighborhood.create({...req.body, _id: req.body.name})
        .then(function (newNeighborhood) {
            res.status(201).json(newNeighborhood);
        })
        .catch(function (err) {
            res.send(err);
        })
});

router.get("/:neighborhoodId/posts", function (req, res) {
    db.Post.find({ neighborhood: req.params.neighborhoodId })
        .then(function (posts) {
            res.json(posts);
        })
        .catch(function (err) {
            res.send(err);
        })
});

router.get("/:neighborhoodId", function (req, res) {
    db.Neighborhood.findById(req.params.neighborhoodId)
        .then(function (foundNeighborhood) {
            res.json(foundNeighborhood);
        })
        .catch(function (err) {
            res.send(err);
        })
});

module.exports = router;

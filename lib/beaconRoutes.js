var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var beacons = require('./beacons.js');

function beaconsRoute() {
  var router = new express.Router();
  router.use(cors());
  router.use(bodyParser());

  // List endpoint
  router.get('/', function(req, res) {
    beacons.list(function(err, beaconMap){
      if (err){
        return res.send(500, err);
      }
      return res.json(beaconMap);
    });
  });

  // Creation endpoint - support iBeacon creation from URL requests as well as
  router.post('/', function(req, res) {
    var body = req.body || {};
    beacons.create(body, function(err, created){
      if (err){
        return res.send(500, err);
      }
      return res.json(created);
    });
  });

  return router;
}

module.exports = beaconsRoute;

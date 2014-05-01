var $fh = require('fh-mbaas-api');
module.exports = function(req, res, next){
  $fh.db({
    act : 'list',
    type : 'beacons'
  }, function(err, data){
    if (err){
      return res.error(err);
    }
    var beacons = {};
    data.list.forEach(function(b){
      beacons[b.minor] = b;
    });
    return res.json(beacons);
  });
};
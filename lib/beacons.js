var fh = require('fh-mbaas-api'),
_ = require('underscore');

exports.list = function(cb){
  fh.db({
    act : 'list',
    type : 'beacons'
  }, function(err, data){
    if (err){
      return cb(err);
    }
    var beacons = {};
    data.list.forEach(function(b){
      beacons[b.fields.minor] = b.fields;
    });
    return cb(null, beacons);
  });
};

exports.create = function(body, cb){
  var b = {
    major : body.major || 1,
    minor : body.minor || 1,
    label : body.label || 'iBeacon Label',
    sublabel : body.sublabel || 'iBeacon SubLabel'
  };
  fh.db({
    act : 'create',
    type : 'beacons',
    fields : b
  }, function(err, data){
    if (err){
      return cb(err);
    }
    return cb(null, data.fields);
  });
};

exports.prime = function(cb){
  exports.list(function(err, res){
    if (err){
      return cb(err);
    }
    if (_.isEmpty(res)){
      exports.create({}, cb);
    }else{
      return cb(null, 'Already populated');
    }
  })
};

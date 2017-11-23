var ObjectId = require('mongodb').ObjectID;

var self = module.exports = {
  find: (params) => {
    return new Promise((resolve, reject) => {

      var query = {};
      var projection = {};

      Testimonies.native((err, collection) => {
        if(err)
          return reject({ error : true, messsage : "Error Interno", status : 500 ,  err: err});

        collection.find(query, projection).toArray((err, docs) => {
          if(err)
            return reject({ error : true, messsage : "Error Interno", status : 500, err: err});
          return resolve(docs);
        });

      });

    });
  },
  create : function(params) {
    return new Promise(function (resolve, reject) {
      Testimonies.native(function (err, collection) {
        if(err) {
          sails.log.error(err);
          reject({ status:500, error: true, location:"TestimoniesService.create: Native. Collection Testimonies", message:"Ocurrió un error interno, por favor intente más tarde", info:err });
        }
        var query = self.createQuery(params);

        collection.insertOne(query, function(err, result) {
          if(err) {
            sails.log.error(err);
            reject({ status:500, error:true, location:"TestimoniesService.create: Error in insertOne", message:"Ocurrió un error al guardar el testimonio", info:err });
          }
          resolve(result.ops[0]);
        });
      });
    });
  },
  createQuery : function(params) {
    var query = {};

    if(params.state) {
      query.state = params.state;
    }

    if(params.municipality) {
      query.municipality = params.municipality;
    }

    if(params.date) {
      query.date = params.date;
    }

    if(params.age) {
      query.age = params.age;
    }

    if(params.details) {
      query.details = params.details;
    }

    if(params.clinic) {
      query.clinic = params.clinic;
    }

    if(params.births) {
      query.births = params.births;
    }

    if(params.contraceptive) {
      query.contraceptive = params.contraceptive;
    }

    query.createdAt = new Date();
    query.active = true;

    return query;
  }
}

var ObjectId = require('mongodb').ObjectID;

var self = module.exports = {
  create : function(params){
    return new Promise(function (resolve, reject){
      Form.native(function (err, collection){
        if(err){
          sails.log.error(err);
          reject({status:500, error: true, location:"FormService.create: Native. Collection Form", message:"Ocurrió un error interno, por favor intente más tarde", info:err});
        }
        var query = self.createQuery(params);

        collection.insertOne(query, function(err, result){
          if(err){
            sails.log.error(err);
            reject({status:500, error:true, location:"FormService.create: Error in insertOne", message:"Ocurrió un error al guardar el formulario", info:err});
          }
          resolve(result.ops[0]);
        });
      });
    });
  },
  createQuery : function(params){
    var query = {};

    if(params.name){
      query.name = params.name;
    }
    if(params.age){
      query.age = params.age;
    }

    query.createdAt = new Date();
    query.active = true;

    return query;
  }
}

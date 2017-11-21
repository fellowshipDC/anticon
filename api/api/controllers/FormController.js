/**
 * FormController
 *
 * @description :: Server-side logic for managing forms
 *
 */
var sanitize = require('mongo-sanitize');

module.exports = {
  /**
   * This function save the form data in the database
   * @param {string} name
   * @param {int} age
   * @returns {}
   * @throws {}
   * @author Mitsiu <alejandro.carreno@datacivica.org>
   * @todo Receive real parameters
   **/
  create : function(req, res){
    var params = sanitize(req.params.all());

    FormService.create(params).then(function(result){
      return res.json(result);
    }).catch(function(err){
      sails.log.error(err);
      return res.send(err.status, err);
    });
  }
}

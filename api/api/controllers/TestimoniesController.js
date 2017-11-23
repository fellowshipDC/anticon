/**
 * TestimoniesController
 *
 * @description :: Server-side logic for managing testimonies
 *
 */

var sanitize = require('mongo-sanitize');

module.exports = {

  /**
   * This function save the testimony data in the database
   * @returns {array} res
   * @throws {}
   * @todo
   **/

  getTestimonies: (req, res) => {
    var params = sanitize(req.params.all());

    TestimoniesService.find(params).then((result) => {
      return res.send(result);
    }).catch((err) => {
      sails.log.error(err);
      return res.send(err)
    });
  },

  /**
   * This function save the testimony data in the database
   * @param {string} state
   * @param {string} municipality
   * @param {string} date
   * @param {number} age
   * @param {string} details
   * @param {string} clinic
   * @param {number} births
   * @param {string} contraceptive
   * @returns {object} res
   * @throws {}
   * @author Mitsiu <alejandro.carreno@datacivica.org>
   * @todo
   **/

  create : function(req, res) {
    var params = sanitize(req.params.all());

    if (typeof params.state === 'undefined' || typeof params.state !== 'string') {
      return res.status(403).send({ messsage : "state param is either undefined or is not string" });
    }

    if (typeof params.municipality === 'undefined' || typeof params.municipality !== 'string') {
      return res.status(403).send({ messsage : "municipality param is either undefined or is not string" });
    }

    if (typeof params.date === 'undefined' || typeof params.date !== 'string') {
      return res.status(403).send({ messsage : "date param is either undefined or is not string" });
    }

    if (typeof params.age === 'undefined' || typeof params.age !== 'number') {
      return res.status(403).send({ messsage : "age param is either undefined or is not number" });
    }

    if (typeof params.details === 'undefined' || typeof params.details !== 'string') {
      return res.status(403).send({ messsage : "details param is either undefined or is not string" });
    }

    if (typeof params.clinic === 'undefined' || typeof params.clinic !== 'string') {
      return res.status(403).send({ messsage : "clinic param is either undefined or is not string" });
    }

    if (typeof params.births === 'undefined' || typeof params.births !== 'number') {
      return res.status(403).send({ messsage : "births param is either undefined or is not number" });
    }

    if (typeof params.contraceptive === 'undefined' || typeof params.contraceptive !== 'string') {
      return res.status(403).send({ messsage : "contraceptive param is either undefined or is not string" });
    }

    TestimoniesService.create(params).then(function(result) {
      return res.json(result);
    }).catch(function(err) {
      sails.log.error(err);
      return res.send(err.status, err);
    });
  }
}

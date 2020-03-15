/**
 * TimeInputController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    async create(req,res) {

        var createdUser = await TimeInput.create({
          userId : req.body.userId,
          check_in: req.body.checkIn,
          check_out: req.body.checkOut,
          date: req.body.date,
         }).fetch();
         console.log(createdUser);
         res.json(createdUser)

        },

     find(req,res) {
         TimeInput.find({
             userId : req.param.userId,
         }).then((result) => {
             res.ok(result);
         }).catch((error) => {
             res.serverError(error);
         });
     },

    async update(req,res) {
      let criteria = {
        userId: req.body.userId,
        date: req.body.date,
      };
      let updatedData = {
        check_out: req.body.checkOut
      };
      let updatedRecords = await TimeInput.update(criteria).set(updatedData).fetch();
      console.log(updatedRecords);
      res.json(updatedRecords);

    },

};


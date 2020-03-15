/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create:function(req,res){
     
      Product.create({
          name : req.param('name'),
          qty : req.param('qty')
      })
      .then(product => {
          return res.ok(product);
      })
      .catch(err => res.serverError(err));
      
  },

  find : function(req,res){

    Product.find()
    .then(products => {
        
        res.ok(products)
    })
    .catch(err => res.send(err));

      
  },

  delete:function(req,res){
     Product.destroy({
          id: req.params.id
     })
      .then(product => {
        res.ok(product)
      })
      .catch(err => res.serverError(err));
     
  },

  update:function(req,res){
     
      let attributes = {};

      if(req.param('name')) {
          attributes.name = req.param('name')
      }

      if(req.param('qty')) {
        attributes.qty = req.param('qty')
    }
    console.log(req.params.id, attributes)
    Product.updateOne({
        id : req.params.id
    },attributes
     )
       .then(products => {
           console.log("products : ", products)
           try {
            res.ok(products);
           } catch (error) {
               console.log("error : ")
           }
           
       })
    //    .catch(err => res.serverError(err));
  },

};
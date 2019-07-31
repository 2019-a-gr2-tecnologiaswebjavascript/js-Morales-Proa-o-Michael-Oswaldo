/**
 * Factura.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    cajero:{
      type:'string'
    },
    total:{
      type:'string'
    },
    detallesDeFactura:{
      collection:'detalleFactura',
      via:'fkFactura'
    },
    fkUsuario:{
      model:'usuario'
    }
  },

};


/**
 * Ingrediente.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
      type:'string'
    },
    cantidad:{
      type:'number'
    },
    descripcion:{
      type:'string'
    },
    original:{
      type:'boolean'
    },
    tipo:{
      type:'string'
    },
    necesitaRefrigeracion:{
      type:'boolean'
    },
    fkComida:{
      model:'comida'
    },
    detallesDeIngrediente:{
      collection:'detalleFactura',
      via:'fkIngrediente'
    }


  },

};


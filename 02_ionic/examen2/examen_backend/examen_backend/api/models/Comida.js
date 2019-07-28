/**
 * Comida.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
    type:'string'
    },
    descripcion:{
      type:'string'
    },
    nacionalidad:{
      type:'string'
    },
    numeroPersonas:{
      type:'number'
    },
    picante:{
      type:'boolean'
    },
    fkUsuario:{
      model:'usuario'
    },
    ingredientesDeComida:{
      collection:'ingrediente',
      via:'fkComida'
    }


  },

};


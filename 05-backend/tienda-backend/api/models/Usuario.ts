/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
nombre:{
  type:'string',
  required: true,
  minLength:10,
  maxLength:60

},
apellido:{
  type:'string',
  required: true

},
    cedula:{
      type: 'string',
      minLength:10,
      maxLength:25,
      unique: true,
      required: true
    },
    username:{
      type:'string',
      required: true,
      unique:true,
      minLength:3,
      maxLength:60
    },
    sueldo:{
  type: 'number',
      min:100,
      max:5000.00,
      defaultsTo:100
    },
    estaCasado:{
type:'boolean',
      defaultsTo: false
    },
    tipoUsuario:{
  type:'string',
      enum: ['normal','pendiente','premium'],
      defaultsTo:'normal'
    },
    corre:{
    type:'string',
      isEmail:true
    },
    //conf ppapá
    arregloProductosUsuario:{
    collection:'productoUsuario',
      via:'fkUsuario'
    }


  },





};


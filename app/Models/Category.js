'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {

    /**
     * 
     * Relacionamento entre categoria e imagem de destaque
     * 
     */
    image() {
        //pertence a
        return this.belongsTo('App/Models/Image')
    }

    /**
     * 
     * Relacionamento entr categoria e Produtos
     * 
     */

    products() {
        return this.belongsToMany('App/Models/Product')

    }
}

module.exports = Category
'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class OrderItem extends Model {


    static boot() {
        super.boot()

        this.addHook('beforeSave', 'OrderItemHook.updateSubtotal')
    }
    static get traits() {
        //dizendo que nao tem updated_at e created_at
        return ['App/Models/Traits/NoTimestamp']
    }

    /** relacionamento com produtos
     * 
     */
    products() {
            return this.belongsTo('App/Models/Product')
        }
        /**
         * Relacioanmento com Order
         */
    order() {
        return this.belongsTo('App/Models/Order')
    }
}

module.exports = OrderItem
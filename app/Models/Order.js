'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {


    /**
     * Relacionamento com OrdersItem
     */
    items() {
            return this.hasMany('App/Models/OrderItem')
        }
        /**
         * Relacionamento com Coupons
         */
    coupons() {
            return this.belongsTo('App/Models/Discount')
        }
        /**
         * Relacionamento com Discounts
         */
    discounts() {
        return this.has('App/Models/Coupon')
    }
    user() {
        return this.belongsTo('App/Models/User', 'user_id', 'id')
    }
}

module.exports = Order
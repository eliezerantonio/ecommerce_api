'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Coupon extends Model {

    static get dates() {

        return ['created_at', 'updated_at', 'valid_from', 'valid_until']
    }

    /**
     *  relacionamento entre coupons e usuairos
     */

    users() {
        return this.belongsToMany('App/Models/User')
    }

    /**
     *  relacionamento entre coupons e produtos
     */

    products() {
        return this.belongsToMany('App/Models/Product')
    }

    /**
     *  relacionamento entre coupons e Order
     */

    orders() {
        return this.belongsToMany('App/Models/Order')
    }


}

module.exports = Coupon
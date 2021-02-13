'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CouponUserSchema extends Schema {
    up() {
        this.create('coupon_users', (table) => {
            table.increments()
            table.integer('coupon_id').unsigned()
            table.integer('user_id').unsigned()
            table.timestamps()

            table.foreign('order_id').references('id').inTable('orders').onDelete('cascade')
            table.foreign('user_id').references('id').inTable('users').onDelete('cascade')

        })
    }

    down() {
        this.drop('coupon_users')
    }
}

module.exports = CouponUserSchema
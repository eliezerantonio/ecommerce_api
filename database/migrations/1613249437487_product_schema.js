'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
    up() {
        this.create('products', (table) => {
                table.increments()
                table.string('name', 200)
                table.integer('image_id').unsigned()
                table.text('description')
                table.decimal('price', 12, 2)
                table.timestamps()

                table.foreign('image_id').references('id').inTable('images').onDelete('cascade')



            })
            //para galeria das iamges do produtos
        this.create('image_product', table => {
            table.increments()
            table.integer('image_id').unsigned()
            table.integer('product_id').unsigned()

            //relacionamento com a tabela de imagens
            table.foreign('image_id').references('id').inTable('images').onDelete('cascade')

            //realacionamento coma  table de produtos
            table.foreign('product_id').references('id').inTable('products').onDelete('cascade')
        })
    }

    down() {
        this.drop('products')
        this.drop('image_product')
    }
}

module.exports = ProductSchema
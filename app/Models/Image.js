'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Image extends Model {
    static get computed() {
            return ['url']
        }
        //computed propriets, sao getter e setter-Muteds

    getUrl({ path }) {
        return `${Env.get('APP_URL')}/images/${path}`

    }
}

module.exports = Image
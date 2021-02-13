'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class User extends Model {
    static boot() {
            super.boot()
                /**
                 * A hook to hash the user password before saving
                 * it to the database.
                 */
            this.addHook('beforeSave', async(userInstance) => {
                if (userInstance.dirty.password) {
                    userInstance.password = await Hash.make(userInstance.password)
                }
            })
        }
        /**
         * 
         * Oculta os campos definidos no retorno das queries no DB
         */

    static get hidden() {
        return ['password']
    }

    static get traits() {
        //serve para executar metodos externos realcioanlos ao model caso eu nao queira meter todo codigo aqui
        return [
            '@provider:Adonis/Acl/HasRole',
            '@provider:Adonis/Acl/HasPermission'
        ]
    }

    /**
     * A relationship on tokens is required for auth to
     * work. Since features like `refreshTokens` or
     * `rememberToken` will be saved inside the
     * tokens table.
     *
     * @method tokens
     *
     * @return {Object}
     */
    tokens() {
        return this.hasMany('App/Models/Token')
    }

    image() {
        return this.belongsTo('App/Models/Image')
    }
    coupon() {
        //** N PARA N */
        return this.belongsToMany('App/Models/Coupon')
    }


}

module.exports = User
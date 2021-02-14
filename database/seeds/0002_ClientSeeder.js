'use strict'

/*
|--------------------------------------------------------------------------
| ClientSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Role = use('Role')
class ClientSeeder {

    async run() {
        const role = await Role.findBy('slug', 'client')
        const Clients = await Factory.model('App/Models/User').createMany(30)
        await Promise.all(Clients.map(async client => {
            await client.roles().attach([role.id])
        }))

        const user = awaitUser.create({
            name: 'Eliezer',
            surname: 'Antonio',
            email: 'eliezer@gmail.com',
            password: 'secret'
        })
        const adminRole = await Role.findBy('slug', 'admin')
        await user.roles().attach[role.id]
    }
}

module.exports = ClientSeeder
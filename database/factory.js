'use strict'

const Factory = require('@adonisjs/lucid/src/Factory')

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */


Factory.blueprint('App/Models/User', faker => {
    return {
        name: faker.first(),

        surname: faker.last(),

        email: faker.email({ domain: 'gmail.com' }),

        password: 'secret'

    }
})

Factory.blueprint('App/Models/Category', faker => {
    return {
        title: faker.country({ full: true }),
        description: faker.sentence()
    }
})

Factory.blueprint('App/Models/Product', faker => {
        return {
            name: faker.animal(),
            description: faker.sentence(),
            price: faker.floating({ min: 0, max: 10000, fixed: 2 })
        }
    })
    //
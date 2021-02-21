'use strict'



/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
    return { greeting: 'Hello world in JSON' }
})

/**
 * Importa s rotas de autenticacao
 */
require('./auth')


/**
 * Importa s rotas de admin
 */
require('./admin')

/**
 * 
 * Importa rotas de clientes
 */
require('./client')
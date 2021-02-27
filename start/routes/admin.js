'use strict'



/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
    /**
     * 
     * Categories resource routes
     * 
     */

    Route.resource('categories', 'CategoryController').apiOnly()
        /**
         * 
         * Product resource routes
         * 
         */
    Route.resource('products', 'ProductController').apiOnly()

    /**
     * 
     * Coupon Resource Coupons
     */
    Route.resource('coupons', 'CouponController').apiOnly()
        /**
         * 
         * Coupon Resource Orders
         */
    Route.resource('orders', 'OrderController').apiOnly()
        /**
         * 
         * Coupon Resource Orders
         */
    Route.resource('images', 'ImageController').apiOnly()
        /**
         * 
         * Coupon Resource Users
         */
    Route.resource('users', 'UserController').apiOnly()


}).prefix('v1/admin').namespace('Admin')
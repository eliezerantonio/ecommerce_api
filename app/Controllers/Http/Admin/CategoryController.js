'use strict'
const Category = use('App/Models/Category')
    /** @typedef {import('@adonisjs/framework/src/Request')} Request */
    /** @typedef {import('@adonisjs/framework/src/Response')} Response */
    /** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with categories
 */
class CategoryController {
    /**
     * Show a list of all categories.
     * GET categories
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     * @param {Object} ctx.pagination
     */
    async index({ request, response, view, pagination }) {

        const title = request.input('title');
        //     caso titlo nao seja undefine
        const query = Category.query()
        if (title) {
            query.where('title', 'LIKE', `%${title}%`);
        }

        const categories = await query.paginate(pagination.page, pagination.limit);

        return response.send(categories);


    }



    /**
     * Create/save a new category.
     * POST categories
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {

        try {
            const { title, description, image_id } = request.all();
            const category = await Category.create({ title, description, image_id });

            return response.status(201).send(category);
        } catch (error) {
            return response.status(400).send({ message: "Erro ao processar a sua solicitação!" })
        }

    }

    /**
     * Display a single category.
     * GET categories/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params: { id }, request, response, view }) {

        const category = await Category.findOrFail(id)

        return response.send(category);
    }


    /**
     * Update category details.
     * PUT or PATCH categories/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {}

    /**
     * Delete a category with id.
     * DELETE categories/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params: { id }, request, response }) {
        const category = await Category.findOrFail(id)
        await category.delete()

        return response.status(204).send({ message: "Eliminado com sucesso" })
    }
}

module.exports = CategoryController
'use strict'

const OrderHook = exports = module.exports = {}

OrderHook.updateValues = async model => {


    // criando propriesades virtual para apresentar esses dados de form custumizadas
    model.$sidedLoaded.subtotal = await model.items().getSum('subtotal')
    model.$sidedLoaded.qty_items = await model.items().getSum('quantity')
    model.$sidedLoaded.discount = await model.discounts().getSum('discount')
    model.total = model.$sidedLoaded.subtotal - model.$sidedLoaded.discount



}
OrderHook.updateCollectionValues = async model => {
    for (let model of models) {

        model = await OrderHook.updateValues(model)
    }
}
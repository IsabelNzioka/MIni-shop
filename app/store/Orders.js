Ext.define('Mini.app.store.Orders', {
    extend: 'Ext.data.Store',
    alias: 'store.orders',
    storeId: "orders",
    model: 'Mini.app.model.Order',
    requires: ['Mini.app.model.Order'],
    autoLoad:true,
    sorters: ['id', "userId", "orderTime"],
    pageSize: 25
})

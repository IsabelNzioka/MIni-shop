Ext.define('Mini.app.store.Orders', {
    extend: 'Ext.data.Store',
    alias: 'store.orderstore',
    model: 'Mini.app.model.Order',
    requires: ['Mini.app.model.Order'],
    autoLoad:true,
    sorters: ['id'],
    pageSize: 25
})

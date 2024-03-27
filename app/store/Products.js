Ext.define('Mini.app.store.Products', {
    extend: 'Ext.data.Store',
    alias: 'store.productstore',
    model: 'Mini.app.model.Product',
    requires: ['Mini.app.model.Product'],
    autoLoad:true,
    sorters: ['id'],
    pageSize: 25
})

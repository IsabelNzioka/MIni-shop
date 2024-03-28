Ext.define('Mini.app.store.Categories', {
    extend: 'Ext.data.Store',
    alias: 'store.categories',
    storeId: "categories",
    model: 'Mini.app.model.Category',
    requires: ['Mini.app.model.Category'],
    autoLoad:true,
    sorters: ['id'],
    pageSize: 25
})

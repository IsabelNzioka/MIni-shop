Ext.define('Mini.app.store.Users', {
    extend: 'Ext.data.Store',
    alias: 'store.users',
    storeId: "users",
    model: 'Mini.app.model.User',
    requires: ['Mini.app.model.User'],
    autoLoad:true,
    sorters: ['id'],
    pageSize: 25
})



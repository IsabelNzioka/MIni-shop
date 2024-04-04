Ext.define("Mini.app.store.Requests", {
    extend: 'Ext.data.Store',
    model: 'Mini.app.model.Request',
    alias: 'store.requests',
    requires: ['Mini.app.model.Request'],
    sorters: ['date'],
    pageSize: 25,
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'resources/requests.json', 
        reader: {
            type: 'json',
            rootProperty: 'requests'
        }
    }

});

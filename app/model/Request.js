Ext.define("Mini.app.model.Request", {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'date', type: 'date' },
        { name: 'ipAddress', type: 'string' },
        { name: 'resourceUrl', type: 'string' }
    ]
});
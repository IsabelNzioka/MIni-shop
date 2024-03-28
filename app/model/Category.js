Ext.define('Mini.app.model.Category', {
    extend: 'Ext.data.Model',

    fields: [
        'id',
        'name'
    ],
    proxy: {
        type: 'rest',
       // url:  to be defined
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty: 'itemCount'
        }
    },
});

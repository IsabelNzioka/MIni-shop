Ext.define('Mini.app.model.User', {
    extend: 'Ext.data.Model',

    idProperty: '_id',
    fields: [
        '_id', 
        'name',
        'username',
        'password'
       
    ],
    proxy: {
        type: 'rest',
       // url:  to be defined
        reader: {
            type: 'json',
            rootProperty: 'rows',
            totalProperty: 'totalCount'
        }
    },

});

Ext.define('Mini.app.model.Order', {
    extend: 'Ext.data.Model',

    fields: [
        'orderNumber',
        'userId',
        'orderTime', 
        'orderTotal', 
        'paymentUrl'
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

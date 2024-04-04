Ext.define("Mini.app.model.Log", {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'type', type: 'string' },
        { name: 'timestamp', type: 'date' },
        { name: 'message', type: 'string' }
        
    ]
});

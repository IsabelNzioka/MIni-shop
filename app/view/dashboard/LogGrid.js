Ext.define('Mini.app.view.dashboard.LogGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'loggrid',
    cls: 'log-grid',

    title: 'Log Listings',
    store: {
        type: 'logs' // Assuming you've defined a store with the alias 'logs' and populated it with data
    },
    columns: [
        { text: 'Type', dataIndex: 'type', flex: 1 },
        { text: 'Timestamp', dataIndex: 'timestamp', flex: 1, xtype: 'datecolumn', format: 'Y-m-d H:i:s' },
        { text: 'Message', dataIndex: 'message', flex: 2 }
    ],
    height: 400,
    width: '100%',
    scrollable: true,
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },

    features: [{
        ftype: 'grouping',
        groupHeaderTpl: '{name} ({rows.length} Item{[values.rows.length > 1 ? "s" : ""]})'
    }],

    // Add sorting options
    sortableColumns: true,
    sorters: ['type', 'timestamp'],

    // Add a method to filter logs by type
    filterLogsByType: function(type) {
        this.getStore().clearFilter();
        this.getStore().filter('type', type);
    }
});

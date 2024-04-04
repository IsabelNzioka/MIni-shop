Ext.define('Mini.app.view.dashboard.RequestsGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'requestgrid',

    title: 'Request Listings',
    store: {
        type: 'requests' // Assuming you've defined a store with the alias 'requests'
    },
    columns: [
        { text: 'Date', dataIndex: 'date', flex: 1, xtype: 'datecolumn', format: 'Y-m-d H:i:s' },
        { text: 'IP Address', dataIndex: 'ipAddress', flex: 1 },
        { text: 'Resource URL', dataIndex: 'resourceUrl', flex: 1 }
    ],
    height: '100%',
    width: '100%',
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    scrollable: true,

    tbar: [{
        xtype: 'datefield',
        fieldLabel: 'Filter by Date',
        labelWidth: 100,
        listeners: {
            select: 'onDateSelect'
        }
    }],

    controller: {
        onDateSelect: function(datefield, date) {
            var selectedDate = datefield.getValue();
            var requestStore = this.getView().getStore();

            requestStore.clearFilter();
            if (selectedDate) {
                requestStore.filterBy(function(record) {
                    var recordDate = Ext.Date.clearTime(record.get('date'), true); // Clear time portion for comparison
                    return recordDate.getTime() === selectedDate.getTime();
                });
            }
        }
    }
});

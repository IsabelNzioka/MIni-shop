Ext.define('Mini.app.view.dashboard.LogPieChart', {
    extend: 'Ext.Panel',
    xtype: 'logpiechart',
    width: 650,
    align: 'center',

    initComponent: function() {
        var me = this;

        // Define the data for the chart directly
        var data = [
            { type: 'Error', count: 10 },
            { type: 'Warning', count: 30 },
            { type: 'Info', count: 20 },
            { type: 'Debug', count: 40 }
        ];

        // Create the data store with the provided data
        var myDataStore = Ext.create('Ext.data.Store', {
            fields: ['type', 'count'],
            data: data
        });

        me.items = [{
            xtype: 'polar',
            width: '100%',
            height: 500,
            store: myDataStore,
            insetPadding: 50,
            innerPadding: 20,
            legend: {
                docked: 'bottom'
            },
            interactions: ['rotate', 'itemhighlight'],
            sprites: [{
                type: 'text',
                text: 'System Logs Chart',
                font: '22px Helvetica',
                width: 100,
                height: 30,
                x: 40,
                y: 20
            }, {
                type: 'text',
                text: 'Data: Log Stats',
                font: '10px Helvetica',
                x: 12,
                y: 425
            }, {
                type: 'text',
                text: 'Source: Minishop',
                font: '10px Helvetica',
                x: 12,
                y: 435
            }],
            series: [{
                type: 'pie',
                angleField: 'count',
                label: {
                    field: 'type',
                    display: 'outside',
                    calloutLine: {
                        length: 60,
                        width: 3
                    }
                },
                highlight: true,
                tooltip: {
                    trackMouse: true,
                    renderer: function(storeItem, item) {
                        this.setHtml(storeItem.get('type') + ': ' + storeItem.get('count'));
                    }
                }
            }]
        }];

        this.callParent();
    }
});
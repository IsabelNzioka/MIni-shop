Ext.define('Mini.app.view.dashboard.Logs', {
    extend: 'Ext.panel.Panel',
    xtype: 'logs',
    layout: 'vbox',
    autoScroll: true, // Enable scrolling

    items: [
    

        {
            xtype: 'loggrid'
        },
        {
            xtype: 'container', // Use a container to wrap the pie chart
            flex: 1, // Take remaining vertical space
            layout: {
                type: 'vbox',
                align: 'center', // Center items vertically
                pack: 'center' // Center items horizontally
            },
            items: [
                {
                    xtype: 'logpiechart',
                }
            ]
        }
    ] 
});

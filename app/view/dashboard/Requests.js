Ext.define('Mini.app.view.dashboard.Requests', {
    extend: 'Ext.panel.Panel',
    xtype: 'requests',
    layout: 'vbox',
    autoScroll: true, // Enable scrolling

    items: [
        {
            xtype: 'requestgrid'
        },
        
    ] 
});

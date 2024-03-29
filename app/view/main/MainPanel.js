Ext.define("Mini.app.view.main.MainPanel", {
    extend:'Ext.tab.Panel',
    xtype:'mainpanel',
    items: [{
        title: 'Products',
        iconCls:'fa fa-users',
        xtype: 'products'
    }]
})
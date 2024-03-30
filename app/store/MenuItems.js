Ext.define('Mini.app.store.MenuItems', {
    extend:'Ext.data.TreeStore',
    alias:'store.menuitems',
   
    root: {
        text: 'Root',
        expanded: true,
        children: [
            {
            text: 'Products',
            iconCls: 'x-fa fa-store',
            className: 'products',
            leaf: true
        },
        {
            text: "Orders",
            iconCls: "x-fa fa-store",
            className: 'orders',
            leaf: true
          
          },
        {
            text: 'Users',
            iconCls: 'x-fa fa-user',
            leaf: true
            
        },{
            text: 'Groups',
            iconCls: 'x-fa fa-group',
            leaf: true
        },{
            text: 'Settings',
            iconCls: 'x-fa fa-wrench',
            leaf: true
        }]
    }
    
})

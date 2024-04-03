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
            text: "Inventories",
            iconCls: "x-fa fa-store",
            className: 'inventoriesgrid', 
            leaf: true
          
          },
           {
            text: "Cart",
            iconCls: "fas fa-shopping-cart",
            className: 'cart', 
             leaf: true
          },
      
   ] }
    
})

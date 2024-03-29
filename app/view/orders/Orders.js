Ext.define("Mini-shop.view.orders.Orders", {
    extend: "Ext.panel.Panel",
  
    xtype: "orders",
    scrollable: true,
    height: "100vh",
  
    layout: {
      type: "hbox",
      pack: "start",
      align: "stretch",
    },
  
    bodyPadding: 10,
  
    defaults: {
      frame: true,
      bodyPadding: 10,
    },
  
    items: [
      {
        xtype: "ordersgrid",
        width: 1110,
      },
      {
        xtype: "orderdetails",
      },
    ],
  });
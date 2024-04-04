Ext.define("Mini.app.view.orderitem.OrderItem", {
    extend: "Ext.panel.Panel",
  
    xtype: "orderitem",
    scrollable: true,
    height: "100vh",
    bodyPadding: 10,
    defaults: {
      frame: true,
      bodyPadding: 5,
    },
    margin:'20',
    width: '90%',
      items: [
      {
        xtype: "orderitemgrid",
      }
    ],
  });

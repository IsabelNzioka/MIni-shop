Ext.define("Mini.app.view.cart.Cart", {
    extend: "Ext.panel.Panel",
  
    xtype: "cart",
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
        xtype: "cartgrid",
      }
    ],
  });
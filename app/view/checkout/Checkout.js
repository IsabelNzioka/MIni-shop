Ext.define("Mini.app.view.checkout.Checkout", {
    extend: "Ext.panel.Panel",
  
    xtype: "checkout",
    scrollable: true,
    height: "100vh",
    layout: "center",
    defaults: {
      frame: true,
      bodyPadding: 5,
    },
    margin:'20',
    width: '80%',
      items: [
      {
        xtype: "checkoutform",
      }
    ],
  });
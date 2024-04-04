Ext.define("Mini-shop.view.products.Products", {
  extend: "Ext.panel.Panel",

    requires: ['Mini.app.view.cart.Cart','Mini.app.view.cart.CartGrid' ], 

  xtype: "products",
  scrollable: true,
  height: "100vh",

  layout: {
    type: "hbox",
    pack: "start",
    align: "stretch",
  },

  bodyPadding: 8,

  defaults: {
    frame: true,
    // bodyPadding: 10,
  },

  items: [
    {
      xtype: "productsgrid",
      width: 1100,
    },
    {
      xtype: "productdetails",
    },
  ],
});

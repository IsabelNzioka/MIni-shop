Ext.define("Mini-shop.view.products.Products", {
  extend: "Ext.panel.Panel",

  xtype: "products",
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
      xtype: "productsgrid",
      width: 1110,
    },
    {
      xtype: "productdetails",
    },
  ],
});
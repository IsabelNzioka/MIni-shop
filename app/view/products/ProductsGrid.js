Ext.define("Mini-shop.view.products.ProductsGrid", {
  extend: "Ext.panel.Panel",
  xtype: "productsgrid",

  reference: "productsgrid",

  bodyPadding: 10,
  width: 900,
  //   border: true,

  scrollable: true,
  layout: {
    type: "column",
    columns: 2,
  },

  controller: "productsviewcontroller",

  viewModel: {
    stores: {
      products: {
        type: "products",
        autoLoad: true,
      },
    },
  },

  tbar: [
    {
      text: "Add Products",
      listeners: {
        click: "onAddProductsClicked",
      },
    },
    "->",
    {
      text: "Show Details",
      handler: "onShowProductsDetails",
      // bind: {
      //   disabled: "{!productsgrid.selection}",
      // },
    },
  ],

  listeners: {
    afterrender: "onAfterRender",
  },
});

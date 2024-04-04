Ext.define("Mini-shop.view.products.ProductsGrid", {
  extend: "Ext.panel.Panel",
  xtype: "productsgrid",
    requires: ['Mini.app.view.cart.Cart','Mini.app.view.cart.CartGrid' ], 

  reference: "productsgrid",

  bodyPadding: 10,
//   width: "100%\",
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
      sortByOptions: {
        fields: ['value', 'text'],
        data: [
          { value: "name", text: "Name" },
          { value: "price", text: "Price" },
          { value: "productCode", text: "Product Code" },
        ],
      },
      filterByOptions: {
        fields: ['value', 'text'],
        data: [
          { value: "All", text: "All" },
          { value: "Keyboard", text: "Keyboard" },
          { value: "Monitors", text: "Monitors" }
        ],
      },
    },
  },
  

  tbar: [
    {
      xtype: "combobox",
      fieldLabel: "Sort By",
      labelWidth: 60,
      emptyText: "Choose...",
      bind: {
        store: "{sortByOptions}",
      },
      displayField: "text",
      valueField: "value",
      listeners: {
        change: "onSortByChange", 
      },
    },
    {
      xtype: "combobox",
      fieldLabel: "Filter Categories",
      labelWidth: 110,
      emptyText: "Choose...",
      bind: {
        store: "{filterByOptions}",
      },
      displayField: "text",
      valueField: "value",
      listeners: {
        change: "onFilterByChange", 
      },
    },

    {
      text: "Add Products",
      listeners: {
        click: "onAddProductsClicked",
      },
    }
  ],

  listeners: {
    afterrender: "onAfterRender",
  },
});

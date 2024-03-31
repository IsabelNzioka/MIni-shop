Ext.define("Mini-shop.view.products.ProductsGrid", {
  extend: "Ext.panel.Panel",
  xtype: "productsgrid",

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

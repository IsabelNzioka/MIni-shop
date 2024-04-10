Ext.define("Mini-shop.view.products.ProductFormWindow", {
  extend: "Ext.window.Window",
  xtype: "productformwindow",

  requires: ["Mini-shop.view.products.ProductFormWindowController"],
  controller: "productformwindowcontroller",

  title: "Add A Product",
  height: 410,
  width: 490,
  bodyPadding: 10,
  autoShow: true,
  closable: true,
  modal: true,

  items: [
    {
      xtype: "form",
      reference: "productform",
      itemId: "productform",
      layout: "anchor",
      jsonSubmit: true,

      defaults: {
        anchor: "95%",
      },
      items: [
        {
          reference: "productname",
          xtype: "textfield",
          fieldLabel: "Name",
          name: "name",
          emptyText: "Product Name",
          anchor: "90%",
        },
        {
          reference: "productcode",
          xtype: "textfield",
          fieldLabel: "Product Code",
          name: "productCode",
          emptyText: "Product Code",
          anchor: "90%",
        },
        {
          reference: "productprice",
          xtype: "numberfield",
          fieldLabel: "Price",
          name: "price",
          emptyText: "Product Price",
          anchor: "90%",
          editable: true,
        },
        {
          reference: "productQuantity",
          xtype: "numberfield",
          fieldLabel: "Quantity",
          name: "quantity",
          emptyText: "Product Quantity",
          anchor: "90%",
          editable: true,
        },
        {
          reference: "productimage",
          xtype: "textfield",
          fieldLabel: "Image URL",
          name: "image",
          emptyText: "Image URL",
          anchor: "90%",
        },
        {
          reference: 'productcategory',
          xtype: 'combobox',
          fieldLabel: 'Category',
          name: 'category',
          emptyText: 'Select Category',
          store: {
              type: 'categories' 
          },
          displayField: 'name',
          valueField: 'name',
          anchor: '90%'
      }
        
      ],

      buttons: [
        {
          text: "Reset",
          disabled: false,
          handler: function () {
            this.up("form").getForm().reset(true);
          },
        },
        {
          text: "Save",
          listeners: {
            click: "onProductSave",
          },
        },
      ],
    },
  ],
});

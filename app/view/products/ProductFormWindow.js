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
          reference: "productprice",
          xtype: "numberfield",
          fieldLabel: "Price",
          name: "price",
          emptyText: "Product Price",
          anchor: "90%",
          editable: true,
        },
        {
          reference: "productimage",
          xtype: "textfield",
          fieldLabel: "Image URL",
          name: "imageUrl",
          emptyText: "Image URL",
          anchor: "90%",
        },
        {
          reference: "productcategory",
          xtype: "combobox",
          fieldLabel: "Category",
          name: "category",
          emptyText: "Select Category",
          store: ["Category 1", "Category 2", "Category 3"], // TODO - categories
          anchor: "90%",
        },
        {
          reference: "productdescription",
          xtype: "textareafield",
          fieldLabel: "Description",
          name: "description",
          emptyText: "Product Description",
          anchor: "90%",
        },
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

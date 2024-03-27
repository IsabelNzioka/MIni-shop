Ext.define("Mini-shop.view.products.ProductDetails", {
  extend: "Ext.tab.Panel",
  xtype: "productdetails",
  reference: "productdetails",
  height: 0,

  items: [
    {
      title: "Product Details",
      width: 0,
      margin: "0 10 0 0",
      html: "width : 100", // TODO - CHANGE
    },
  ],
});

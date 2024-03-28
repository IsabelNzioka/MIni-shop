Ext.define("Mini.app.store.OrderItems", {
  extend: "Ext.data.Store",
  alias: "store.orderitems",
  storeId: "orderitems",
  model: "Mini.app.model.OrderItem",
  requires: ["Mini.app.model.OrderItem"],
  //autoLoad: true,
  sorters: ["productCode"],
  pageSize: 25,
});

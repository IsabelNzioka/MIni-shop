Ext.define("Mini.app.store.OrderItemFinal", {
    extend: "Ext.data.Store",
    alias: "store.orderitemfinal",
    storeId: "orderitemfinal",
    model: "Mini.app.model.OrderItemFinalModel",
    requires: ["Mini.app.model.OrderItemFinalModel"],
    //autoLoad: true,
    sorters: ["productCode"],
    pageSize: 25,
  });
  
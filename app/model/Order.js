Ext.define("Mini.app.model.Order", {
  extend: "Ext.data.Model",

  fields: ["orderNumber", "userId", "orderTime", "orderTotal", "paymentUrl"],

  proxy: {
    type: "rest",
    // url: "http://localhost:7000/api/v1/orders/"
    reader: {
      type: "json",
      rootProperty: "data",
      totalProperty: "itemCount",
    },
  },
});

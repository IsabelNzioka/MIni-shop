Ext.define("Mini.app.model.OrderItem", {
  extend: "Ext.data.Model",

  fields: ["productCode", "quantity"],

  proxy: {
    type: "rest",
    // url: "http://localhost:7000/api/v1/orders/orderItems/"
    reader: {
      type: "json",
      rootProperty: "data",
      totalProperty: "itemCount",
    },
  },
});

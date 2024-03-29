Ext.define("Mini.app.model.Order", {
  extend: "Ext.data.Model",

  fields: ["orderNumber", "userId", "orderTime", "orderTotal", "paymentUrl"],

  // proxy: {
  //   type: "rest",
  //   // url: "http://localhost:7000/api/v1/orders/"
  //   reader: {
  //     type: "json",
  //     rootProperty: "data",
  //     totalProperty: "itemCount",
  //   },
  // },
  proxy:{
    type:'rest',
    url: 'resources/orders.json',
    reader:{
        type:'json',
        rootProperty:'rows',
        totalProperty:'totalCount'
    }
},
});

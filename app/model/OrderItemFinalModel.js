Ext.define("Mini.app.model.OrderItemFinalModel", {
    extend: "Ext.data.Model",
  
    fields: ["productImage","productCode","productName","productPrice", "quantity"],
  
    // proxy: {
    //   type: "rest",
    //   // url: "http://localhost:7000/api/v1/orders/orderItems/"
    //   reader: {
    //     type: "json",
    //     rootProperty: "data",
    //     totalProperty: "itemCount",
    //   },
    // },
    proxy:{
        type:'rest',
        url: 'resources/orderItem.json',
        reader:{
            type:'json',
            rootProperty:'rows',
            totalProperty:'totalCount'
        }
    },
  });
  
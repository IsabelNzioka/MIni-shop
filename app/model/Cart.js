Ext.define("Mini.app.model.Cart", {
    extend: "Ext.data.Model",
  
    fields: ["productCode", "quantity", "price", "image", "subTotal"],  
    proxy: {
      type: "memory",
      reader: {
        type: "json",
      },
    },
  
    
  });
  
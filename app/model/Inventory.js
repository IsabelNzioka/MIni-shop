Ext.define("Mini.app.model.Inventory", {
    extend: "Ext.data.Model",
    idProperty: "id",
  
    fields: ["id", "productCode", "quantity"],
  
    proxy: {
      type: "rest",
      url:"http://localhost:6002/api/inventory",
      reader: {
        type: "json",
        rootProperty: "data",
        totalProperty: "itemCount",
      },
    },
  
    
  });
  
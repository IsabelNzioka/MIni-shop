Ext.define("Mini.app.model.Product", {
  extend: "Ext.data.Model",
  idProperty: "id",

  fields: ["id", "name", "price", "image", "description", "categoryId"],


  proxy: {
    type: "rest",
    url:"http://localhost:7000/api/products",
    reader: {
      type: "json",
      rootProperty: "data",
      totalProperty: "itemCount",
    },
  },

  
});

Ext.define("Mini.app.model.Product", {
  extend: "Ext.data.Model",

  fields: ["id", "name", "price", "image", "description", "category"],
  
  proxy: {
    type: "rest",
    // url:  to be defined
    reader: {
      type: "json",
      rootProperty: "data",
      totalProperty: "itemCount",
    },
  },
});

Ext.define("Mini.app.model.Category", {
  extend: "Ext.data.Model",

  fields: ["id", "name"],
  proxy: {
    type: "rest",
     url: "http://localhost:7000/api/v1/category/",
    reader: {
      type: "json",
      rootProperty: "data",
      totalProperty: "itemCount",
    },
  },
});

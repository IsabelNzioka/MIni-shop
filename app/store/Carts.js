Ext.define("Mini.app.store.Carts", {
    extend: "Ext.data.Store",
    alias: "store.carts",
    
    storeId: "carts",
    model: "Mini.app.model.Cart",
    requires: ["Mini.app.model.Cart"],
    autoLoad: false,   
    
    listeners: {
      load: "onCartStoreLoad"
  }
    
  });
  
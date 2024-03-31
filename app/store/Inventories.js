Ext.define("Mini.app.store.Inventories", {
    extend: "Ext.data.Store",
    
    alias: "store.inventories",
    storeId: "inventories",

    model: "Mini.app.model.Inventory",
    requires: ["Mini.app.model.Inventory"],
    autoLoad: true,
    sorters: ["id"],
    pageSize: 25,


    // data: [
    //     {
    //       "id": 1,
    //       "productCode": "AS105",
    //       "quantity": "10012"
    //     },
    //     {
    //       "id": 2,
    //       "productCode": "DE102",
    //       "quantity": "102"
    //     },
    //     {
    //       "id": 3,
    //       "productCode": "HP101",
    //       "quantity": "1003"
    //     }
    //   ]
      

})
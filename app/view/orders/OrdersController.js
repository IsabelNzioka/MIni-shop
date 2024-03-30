Ext.define("Mini-shop.view.orders.OrdersController", {
    extend: "Ext.app.ViewController",
    alias: "controller.orderscontroller",
  
    onOrderGridCellClick: function (
      grid,
      td,
      cellIndex,
      record,
      tr,
      rowIndex,
      e,
      eOpts
    ) {
      let me = this,
        view = me.getView(),
        vm = me.getViewModel(),
        refs = me.getReferences();
      vm.set("record", record);
      
    },

    onShowDetails: function (btn, e, eOpts) {
      Ext.create({
        xtype: "orderdetails",  
      });
    
    },
   
  
   
  });
  
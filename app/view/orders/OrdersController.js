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
    // onShowDetails: function (btn, e, eOpts) {
    //   let postGrid = this.getView();
    //   let lowerPanel = Ext.ComponentQuery.query("postdetailstab")[0];
  
    //   if (postGrid.getHeight() === 400) {
    //     postGrid.setHeight(300);
    //     lowerPanel.setHeight(300);
    //     btn.setText("Hide Details");
    //   } else {
    //     postGrid.setHeight(400);
    //     lowerPanel.setHeight(0);
    //     btn.setText("Show Details");
    //   }
    // },
  
    // onSelectPost: function (id) {
    //   let me = this,
    //     grid = me.getView(),
    //     vm = me.getViewModel(),
    //     refs = me.getReferences();
    //   let record = grid.getStore().findRecord("_id", id);
    //   vm.set("record", record);
    //   grid.getSelectionModel().select(record);
    // },
  });
  
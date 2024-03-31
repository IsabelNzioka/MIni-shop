Ext.define("Mini-shop.view.inventories.InventoryController", {
    extend: "Ext.app.ViewController",
    alias: "controller.inventorycontroller",



    onAddInventoriesClicked: function (btn, e, eOpts) {
        console.log(btn.getText() + " was clicked");
        var wd = Ext.create({
          xtype: "inventoryformwindow",
        });
        wd.show();
      }
})
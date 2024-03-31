Ext.define("Mini-shop.view.inventories.InventoryFormWindowController", {
    extend: "Ext.app.ViewController",
    alias: "controller.inventoryformwindowcontroller",
  
    init: function () {},
  
    onProductSave: function () {
      let window = this.getView();
      let references = window.getReferences();
      let form = references["inventoryform"].getForm();
  
      if (form.isValid()) {
        console.log("isValid >>>>>>>>>>>>>>>>>>>>> Clicked");
        form.submit({
          method: "POST",
          url: "http://localhost:3000/api/inventory",   // TODO - CHange the url
          success: function (form, action) {
            Ext.Msg.alert("Success", action.result.msg);
          },
          failure: function (form, action) {
            Ext.Msg.alert("Failed", action.result.msg);
          },
        });
      } else {
        Ext.Msg.alert("Invalid Data", "Please correct form errors");
      }
    },
  });
  
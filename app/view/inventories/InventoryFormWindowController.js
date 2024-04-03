Ext.define("Mini-shop.view.inventories.InventoryFormWindowController", {
    extend: "Ext.app.ViewController",
    alias: "controller.inventoryformwindowcontroller",
  
    init: function () {},


    onInventoriesSave: function(button) {
      var form = button.up('window').down('form').getForm();
  
      if (form.isValid()) {
        var inventoryData = [];
        var container = button.up('window').down('[reference=inventoryContainer]');
        var fields = container.query('textfield[name^=productCode]');
  
        Ext.each(fields, function(field) {
          var index = field.getName().replace('productCode', '');
          var productCode = field.getValue();
          var quantityField = container.down('textfield[name=quantity' + index + ']');
          var quantity = quantityField.getValue();
  
          if (productCode && quantity) {
            inventoryData.push({
              productCode: productCode,
              quantity: quantity
            });
          }
        });

       
  
        Ext.Ajax.request({
          url: "http://localhost:7000/api/v1/inventory/create-inventories",
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          jsonData: inventoryData,
          success: function(response) {
            var responseData = Ext.decode(response.responseText);
            Ext.Msg.alert("Success", responseData.msg);

            button.up('window').close(); //Close window
          },
          failure: function(response) {
            Ext.Msg.alert("Failed", "Failed to save inventory data");
          }
        });
      } else {
        Ext.Msg.alert("Invalid Data", "Please correct form errors");
      }
    }
  });
  
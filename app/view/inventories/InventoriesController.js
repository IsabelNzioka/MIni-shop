Ext.define("Mini-shop.view.inventories.InventoryController", {
    extend: "Ext.app.ViewController",
    alias: "controller.inventorycontroller",



    onAddInventoriesClicked: function (btn, e, eOpts) {
        console.log(btn.getText() + " was clicked");
        var wd = Ext.create({
          xtype: "inventoryformwindow",
        });
        wd.show();
      },


    onEdit: function (editor, context) {
        var record = context.record;
        var fieldName = context.field;
        var newValue = context.value;
       
        if (fieldName === 'quantity') {
            var productCode = record.get('productCode');

            Ext.Ajax.request({
                url: 'http://localhost:7000/api/v1/inventory/update-quantity',
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                jsonData: {
                    productCode: productCode,
                    quantity: newValue
                },
                success: function (response) {
                    var responseData = Ext.decode(response.responseText);
                    Ext.Msg.alert("Success", responseData.msg);
                },
                failure: function (response) {
                console.log(response)
                Ext.Msg.alert("Failed", "Failed to Update inventory data");
                }
            });
        }
    },

    // onDeleteButtonClick  ['', '']
    // http://localhost:7000/api/v1/inventory/delete 
    onDeleteButtonClick: function() {
        var grid = this.getView();
        var selectedRecords = grid.getSelectionModel().getSelection();

        if (selectedRecords.length > 0) {
            Ext.Msg.confirm('Confirm', 'Are you sure you want to delete the selected inventories?', function(btn) {
                if (btn === 'yes') {
                    var ids = [];
                    Ext.each(selectedRecords, function(record) {
                        ids.push(record.get('id'));
                    });

                    console.log("IDSSSSSSSSSSSS", ids)

                
                    Ext.Ajax.request({
                        url: 'http://localhost:7000/api/v1/inventory/delete ',
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        jsonData: ids, 
                        success: function(response) {
                           
                            Ext.toast('Selected inventories deleted successfully.');
                            grid.getStore().load(); 
                        },
                        failure: function(response) {
                          
                            Ext.toast('Failed to delete selected inventories.', 'Error');
                        }
                    });
                }
            });
        }
    }
})
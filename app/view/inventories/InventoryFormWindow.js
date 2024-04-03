Ext.define("MIni-shop.view.inventories.InventoryFormWindow", {
    extend: "Ext.window.Window",
    xtype: "inventoryformwindow",
  
    // requires: ["Mini-shop.view.inventories.InventoryFormWindowController"],
    controller: "inventoryformwindowcontroller",
  
    title: "Add Inventory",
    height: 410,
    width: 590,
    autoShow: true,
    closable: true,
    modal: true,
  
    items: [
        {
            xtype: "form",
            reference: "inventoryform",
            layout: "anchor",
            jsonSubmit: true,
  
            defaults: {
                anchor: "95%",
                labelWidth: 50, 
            },
            items: [
                {
                    xtype: 'container',
                    layout: 'vbox',
                    reference: 'inventoryContainer',
                    items: [
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Product Code',
                                    name: 'productCode',
                                    emptyText: 'Product Code',
                                    flex: 1
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Quantity',
                                    name: 'quantity',
                                    emptyText: 'Quantity',
                                    margin: '0 0 0 10',
                                    flex: 1
                                }
                            ]
                        },
                        {
                            xtype: 'button',
                            text: '+',
                            margin: '10 0 0 0',
                            handler: function () {
                                var container = this.up('form').down('[reference=inventoryContainer]');
                                container.add({
                                    xtype: 'container',
                                    layout: 'hbox',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'Product Code',
                                            name: 'productCode',
                                            emptyText: 'Product Code',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'Quantity',
                                            name: 'quantity',
                                            emptyText: 'Quantity',
                                            margin: '0 0 0 10',
                                            flex: 1
                                        }
                                    ]
                                });
                            }
                        }
                    ]
                }
            ]
        }
    ],
  
    buttons: [
        {
            text: "Reset",
            disabled: false,
            handler: function () {
                this.up("form").getForm().reset(true);
            },
        },
        {
            text: "Save",
            handler: "onInventoriesSave" 
          }
        // {
        //     text: "Save",
        //     handler: function () {
        //         var form = this.up('window').down('form').getForm();
        //         if (form.isValid()) {
        //             var inventoryData = []; 
        //             var container = this.up('window').down('[reference=inventoryContainer]');
        //             var fields = container.query('textfield[name^=productCode]'); 
                    
        //             Ext.each(fields, function(field) {
        //                 var index = field.getName().replace('productCode', ''); 
        //                 var productCode = field.getValue();
        //                 var quantityField = container.down('textfield[name=quantity' + index + ']'); 
        //                 var quantity = quantityField.getValue();
                       
        //                 if (productCode && quantity) {
        //                     inventoryData.push({
        //                         productCode: productCode,
        //                         quantity: quantity
        //                     });
        //                 }
        //             });
        //             console.log("Inventory Data:>>>>>>>>>>>>>", inventoryData); 
                
        //             Ext.Ajax.request({
        //                 url: "http://localhost:7000/api/inventory/create-inventories",
        //                 method: "POST",
        //                 headers: {
        //                     "Content-Type": "application/json"
        //                 },
        //                 jsonData: inventoryData,
        //                 success: function (response) {
        //                     var responseData = Ext.decode(response.responseText);
        //                     Ext.Msg.alert("Success", responseData.msg);
        //                 },
        //                 failure: function (response) {
        //                     Ext.Msg.alert("Failed", "Failed to save inventory data");
        //                 }
        //             });
        //         } else {
        //             Ext.Msg.alert("Invalid Data", "Please correct form errors");
        //         }
        //     }
        // }

    ],
});

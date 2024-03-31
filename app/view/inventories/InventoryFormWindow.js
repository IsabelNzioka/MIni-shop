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
            handler: function () {
                var formData = this.up('window').down('form').getForm().getValues();
                // Handle saving of formData as per your backend logic
                console.log(formData);
                this.up('window').close();
            },
        },
    ],
});

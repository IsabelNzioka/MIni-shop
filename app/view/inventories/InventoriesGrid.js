Ext.define("Mini-shop.view.inventories.InventoriesGrid", {
    extend: "Ext.grid.Panel",

    xtype: "inventoriesgrid",
    reference: "inventoriesgrid",
    controller: "inventorycontroller",
    
    store: {
        type: 'inventories'
    },

    tbar: [{
        text: 'Add Inventories',
        listeners: {
            click: 'onAddInventoriesClicked'
        }
    }, '->', {
        xtype: 'button',
        text: 'Delete',
        disabled: true, 
        listeners: {
            click: 'onDeleteButtonClick' 
        }
    }],

    plugins: {
        cellediting: {
            clicksToEdit: 2 //double click to edit data
        }
    },

    columns: [
        // { xtype: 'checkcolumn', dataIndex: 'selected', text: '', width: 30, editor: { xtype: 'checkbox' } }, // Checkbox column for selectio
        
        { dataIndex: 'id', text: 'ID' },
        { dataIndex: 'productCode', text: 'Product Code', flex: 1 },
        { 
            dataIndex: 'quantity', 
            text: 'Quantity', 
            flex: 2, 
            sortable: false,
            editor: {
                xtype: 'numberfield',
                allowBlank: false,
                minValue: 0 
            },
            renderer: function(value) {
                if (parseInt(value) < 200) {
                    return '<span style="color: red; font-weight: 600;">' + value + '</span>';
                } else {
                    return value;
                }
            }
        },
    ],

    selModel: {
        selType: 'checkboxmodel', 
        checkOnly: true // Only use checkboxes for selection, not clicking the row
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    scrollable: true,

    listeners: {
        edit: 'onEdit',
        selectionchange: function(selModel, selectedRecords) {
            var deleteButton = this.down('button[text=Delete]');
            deleteButton.setDisabled(selectedRecords.length === 0);
        }
    }
});

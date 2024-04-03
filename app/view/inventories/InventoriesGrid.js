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
    }],

    plugins: {
        cellediting: {
            clicksToEdit: 2 //double click to edit data
        }
    },

    columns: [
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
        mode: 'SINGLE'
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    scrollable: true,

    listeners: {
        edit: 'onEdit' 
    }
});

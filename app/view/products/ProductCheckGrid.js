Ext.define("Mini-shop.view.products.ProductCheckGrid", {
    extend: "Ext.grid.Panel",
    xtype: "productcheckgrid",
    reference: "productcheckgrid",

    // controller: "inventorycontroller",

    store: {
        type: 'products'
    },

    tbar:[{
        text: 'Add Inventories',
        // listeners: {
        //     click: 'onAddInventoriesClicked'
        // }
    }],

    columns: [
        {dataIndex: 'id', text: 'ID' },
        {dataIndex: 'productCode', text: 'Product Code' , flex: 1},
        {dataIndex: 'image', text: 'Image Url' , flex: 1}
    ],

    selModel: {
        mode: 'SINGLE'
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    scrollable:true,


})
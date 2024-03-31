Ext.define("Mini-shop.view.products.ProductDetails", {
  extend: "Ext.tab.Panel",
  xtype: "productdetails",
  reference: "productdetails",
  height: 0,

  items: [
    {
        title: "Product Details",
        width: 0,
        xtype: 'panel',
        layout: 'vbox',
        style: {
            'border-left': '8.9px solid #2D4356'
        },
  
        items: [
            {
                xtype: 'image',
                reference: 'productImage',
                height: 400,
                width: '100%',
                margin: '0 0 10 0',
            },
            {
                xtype: 'component',
                reference: 'productInfo',
                margin: '0 0 10 0',
                style: {
                    'padding-left': '20px'
                }
            }
        ]
    }
]
});

Ext.define("Mini.app.view.cart.CartGrid", {
  extend: "Ext.grid.Panel",

  xtype: "cartgrid",
  reference: "cartgrid",
  controller: "cartgridviewcontroller",
  store: {
    type: "carts"
  },

  columns: [
    { dataIndex: "productCode", text: "Product Code", flex: 0.5, },
    {
      dataIndex: "quantity",
      text: "Quantity",
      editor: {
        xtype: 'numberfield',
        allowBlank: false,
        minValue: 1,
        step: 1
      }
    }, {
      dataIndex: "image",
      text: "Image",
      flex: 1,
      renderer: function (value, metaData, record) {
        const productRecord = Ext.getStore('products').findRecord('productCode', record.get('productCode'));
        if (productRecord) {
          return '<img src="' + productRecord.get('image') + '" height="100">';
        }
        return '';
      }
    },
    {
      dataIndex: "price",
      text: "Unit Price",
      renderer: function (value, metaData, record) {
        const productRecord = Ext.getStore('products').findRecord('productCode', record.get('productCode'));
        if (productRecord) {
          return productRecord.get('price');
        }
        return '';
      }
    },
    {
      dataIndex: "subTotal",
      text: "Sub Total",
      flex: 1,
      renderer: function (value, metaData, record) {
          const quantity = record.get('quantity');
          const productRecord = Ext.getStore('products').findRecord('productCode', record.get('productCode'));
          if (productRecord && quantity) {
              return Number(productRecord.get('price')) * quantity; 
          } else {
              return 0; 
          }
      },
      summaryType: "sum",
      summaryRenderer: function (value, summaryData, dataIndex) {
          return value;
      },
      summary: {
          xtype: 'gridsummaryrow',
          dock: 'bottom'
      }
  }
  
  ],
  features: [
    {
      ftype: "summary",
    },
  ],
  bbar: {
    items: [
      '->',
      {
        text: "Confirm Checkout",
        handler: "onConfirmCheckout",
        cls: 'x-btn-large',
      },
      {
        text: "Cancel",
        handler: "onCancel",
        cls: 'x-btn-large',
      },
    ],
  },
  plugins: {
    rowediting: {
      clicksToEdit: 1,
    },
  },
});

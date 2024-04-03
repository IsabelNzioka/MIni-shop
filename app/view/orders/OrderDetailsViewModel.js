
Ext.define('Mini-shop.view.orders.OrderDetailsViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.orderdetails',
  
    data: {
      orderItems: [
        {
          productName: 'Nike J4',
          productPrice: 20,
          productQuantity: 3,
        },
        {
          productName: 'Stan Smith',
          productPrice: 20,
          productQuantity: 5,
        },
        {
          productName: 'Converse',
          productPrice: 15,
          productQuantity: 1,
        },
      ],
      subTotal: 55,
      discount: 10,
      total: 45,
    },
  });
  
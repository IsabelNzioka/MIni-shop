Ext.define("Mini.app.view.cart.CartGridViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.cartgridviewcontroller",

  addToCart: function (recordData) {
    var me = this,
      cartGrid = me.getView(),
      store = cartGrid.getStore();

    var cartItem = Ext.create('Mini.app.model.Cart', {
      productCode: recordData.productCode,
      quantity: 1
    });

    // check if product code already exists, increment quantity
    store.add(cartItem);

    console.log(store);

    //var totalPrice = store.sum("price");
    // console.log("Total price in cart:", totalPrice);
  },

  onCartStoreLoad: function (store, records, successful, operation, eOpts) {
    records.forEach(function (record) {
      const productRecord = Ext.getStore('products').findRecord('productCode', record.get('productCode'));
      if (productRecord) {
        record.set('price', productRecord.get('price'));
        record.set('image', productRecord.get('image'));
      }
    });
  },

  onConfirmCheckout: function () {
    var grid = Ext.ComponentQuery.query('cartgrid')[0];
    console.log(":::::::::Cart checkout grid::::" + grid);
    var store = grid.getStore();
    console.log(":::::::::Cart checkout store::::" + store);


    if (store.getCount() === 0) {
      Ext.Msg.alert('Empty Cart', 'Please add items to your cart before checking out.');
      return;
    }

    var orderItems = [];

    store.each(function (record) {
      var productCode = record.get('productCode');
      var quantity = record.get('quantity');

      orderItems.push({
        productCode: productCode,
        quantity: quantity
      });
    });

    var orderData = {
      orderItems: orderItems
    };

    this.createOrderOnValidItemsInCheckout(orderData);
    console.log(orderData);
  },

  createOrderOnValidItemsInCheckout: function (orderData) {
    if (orderData) {
      Ext.Ajax.request({
        url: 'http://localhost:7000/api/v1/orders/',
        method: 'POST',
        jsonData: orderData,
        success: function (response) {
          var responseData = Ext.decode(response.responseText);

          if (responseData.success) {

            Ext.toast({
              html: 'Order placed successfully',
              title: 'Success',
              align: 't',
              closable: true,
              slideInDuration: 400,
              minWidth: 400
            });

            var orderTime = responseData.data.orderTime;
            var orderNumber = responseData.data.orderNumber;
            var orderTotal = responseData.data.orderTotal;
            var paymentUrl = responseData.data.paymentUrl;

            console.log('Order placed successfully:');
            console.log('Order Time:', orderTime);
            console.log('Order Number:', orderNumber);
            console.log('Order Total:', orderTotal);
            console.log('Payment URL:', paymentUrl);
            window.location.href = '/#orders';

          } else {
            // Handle the case where the order was not successfully placed
            console.error('Failed to place order:', responseData.message);
          }
        },

        failure: function (response) {
          // Handle failure
          console.error('Failed to place order:', response.responseText);
        }
      });
    }
  }

});
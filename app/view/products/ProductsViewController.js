Ext.define("Mini-shop.view.products.ProductsViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.productsviewcontroller",

  onAfterRender: function () {
    var me = this,
      view = me.getView(),
      productStore = me.getViewModel().getStore("products");

      console.log("Number of records in productStore:", productStore.getCount());

        console.log("@Store111111111111>>>>>>>>>>." + productStore.getData().items);

        productStore.on('load', function(store, records, successful, operation) {
          if (successful) {
              store.each(function(record) {
                  // console.log("Store Item:", record.getData());
                  var productCard = me.createProductCard(record.getData());
                  view.add(productCard);
              });
          } else {
              console.error("Failed to load store data:", operation.getError());
          }
      });
    
  },

  onSortByChange: function (combobox, newValue, oldValue, eOpts) {
    var me = this,
    view = me.getView(),
    productStore = me.getViewModel().getStore("products");
    if (newValue) {
        productStore.sort({
            property: newValue,
            direction: "ASC"
        });

        view.removeAll();

         productStore.each(function(record) {
            var productCard = me.createProductCard(record.getData());
            view.add(productCard);
        });
    }
},

// Get Products bY category name

  onFilterByChange: function (combobox, newValue, oldValue, eOpts) {
    var me = this,
        view = me.getView(),
        productStore = me.getViewModel().getStore("products");

    // Check if newValue is "All"
    if (newValue === "All") {
        view.removeAll();
        productStore.load();
        productStore.each(function(record) {
            var productCard = me.createProductCard(record.getData());
            view.add(productCard);
        });
    } else {
        Ext.Ajax.request({
            url: 'http://localhost:7000/api/categories/category/' + newValue,
            method: 'GET',
            success: function (response) {
                var responseData = Ext.decode(response.responseText);
                view.removeAll();

                productStore.removeAll();

                productStore.add(responseData.data.products);
                productStore.each(function(record) {
                    var productCard = me.createProductCard(record.getData());
                    view.add(productCard);
                });
            },
            failure: function (response) {
                console.error('Failed to load products for category:', response);
            }
        });
    }
},






  createProductCard: function (recordData) {
    var me = this;

    return {
      xtype: "panel",
      bodyPadding: 10,
      height: 300,
      width: 240,
      //   border: true,
      margin: "0 20 30 0",
      style: {
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      },
      layout: {
        type: "vbox",
        align: "stretch",
      },
      items: [
        {
          xtype: "image",
          src: recordData.image,
          flex: 1,
          width: "100%",
          padding: "0 0 10 0",
        },
        {
          xtype: "component",
          html: "Product Code: " + recordData.productCode,
        },
        { xtype: "component", html: "Price: $" + recordData.price },
        {
          xtype: "button",
          text: "View Details",
          margin: "0 0 4 0",
          handler: function () {
               me.onShowProductsDetails(this, true, recordData);
          
          },
        },
        {
          xtype: "button",
          text: "Add to Orders",
          handler: function () {
            console.log("Order placed for product:", recordData.name);
            Ext.toast({
              title: "Order placed successfully!",
              align: "t",
              closable: true,
              slideInDuration: 400,
              minWidth: 400,
            });
          },
        },
      ],
    };
  },

  showProductDetails: function (productData) {
    var grid = this.getView();

    Ext.create("Ext.window.Window", {
      title: "Product Details",
      width: "40%",
      height: "90%",
      modal: true,
      layout: "fit",
      style: {
        position: "absolute",
        right: 0,
        top: grid.getY(), // Align with the top of the ProductGrid
        bottom: 0,
      },
      items: [
        {
          xtype: "panel",
          items: [
            {
              xtype: "image",
              src: productData.image ,
              width: "100%",
              height: 300,
              padding: "0 0 10 0",
            },
            {
              xtype: "component",
              html: "Product Code: " + productData.productCode,
            },
            {
              xtype: "component",
              html: "Price: $" + productData.price,
            },
          ],
        },
      ],
    }).show();
  },

  /////////////////   WINDOW FOR ADDING PRODUCTS    /////////////////////
  onAddProductsClicked: function (btn, e, eOpts) {
    console.log(btn.getText() + " was clicked");
    var wd = Ext.create({
      xtype: "productformwindow",
    });
    wd.show();
  },

  //   ///////////////////////////////////// Display Details
  onShowProductsDetails: function (btn, state, recordData) {
    let productGrid = this.getView();
    let lowerPanel = Ext.ComponentQuery.query("productdetails")[0];

    console.log("getView ---Meeeeeeeeeeeeee" + recordData.image);

    if (productGrid.getWidth() === 1100) {
        productGrid.setWidth(300);
        lowerPanel.setWidth(790);
        
        lowerPanel.down('image').setSrc(recordData.image); // Set image source
        
        let productInfoEl = lowerPanel.down('component[reference=productInfo]').getEl();
        productInfoEl.setHtml('<p><b>Product Code:</b> ' + recordData.productCode + '</p>' +
                              // '<p><b>Price:</b> $' + recordData.price + '</p>' +
                              "<p><b>Description:</b> The XYZ Mechanical Gaming Keyboard is designed for gamers who demand precision and durability. Featuring high-quality mechanical switches, customizable RGB lighting, and programmable macro keys, this keyboard offers a superior gaming experience. With its ergonomic design and anti-ghosting technology, you can enjoy hours of comfortable and responsive gaming sessions. Whether you're a casual gamer or a professional esports player, the XYZ Mechanical Gaming Keyboard delivers the performance and reliability you need to dominate the competition. </p>"  
                              );

                             
        btn.setText("Hide Details");
        btn.addCls('hideDetailsButton');
    } else {
        productGrid.setWidth(1100);
        lowerPanel.setWidth(0);
        btn.setText("Show Details");
        btn.removeCls('hideDetailsButton');
    }
}
});

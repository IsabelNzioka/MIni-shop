Ext.define("Mini-shop.view.products.ProductsViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.productsviewcontroller",

  onAfterRender: function () {
    var me = this,
      view = me.getView(),
      productStore = me.getViewModel().getStore("products");

    console.log("@Store>>>>>>>>>>." + productStore);

    productStore.each(function (record) {
      var productCard = me.createProductCard(record.getData());
      view.add(productCard);
    });
  },

  createProductCard: function (recordData) {
    var me = this;

    return {
      xtype: "panel",
      bodyPadding: 10,
      height: 300,
      width: 250,
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
          src: recordData.imageUrl,
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
            me.showProductDetails(recordData);
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
              src: productData.image,
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
  onShowProductsDetails: function (btn, state) {
    let productGrid = this.getView();

    console.log("getView ---Meeeeeeeeeeeeee" + productGrid);

    let lowerPanel = Ext.ComponentQuery.query("productdetails")[0];

    if (productGrid.getWidth() === 1110) {
      productGrid.setWidth(300);
      lowerPanel.setWidth(900);
      btn.setText("Hide Details");
    } else {
      productGrid.setWidth(1110);
      lowerPanel.setWidth(0);
      btn.setText("Show Details");
    }
  },
});

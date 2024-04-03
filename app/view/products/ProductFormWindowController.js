Ext.define("Mini-shop.view.products.ProductFormWindowController", {
  extend: "Ext.app.ViewController",
  alias: "controller.productformwindowcontroller",

  init: function () {},

 
  onProductSave: function (button) {
    var form = button.up('window').down('form').getForm();

    if (form.isValid()) {
      var formData = form.getValues();
      var productData = [{
        name: formData.name,
        price: formData.price,
        productCode: formData.productCode,
        image: formData.image,
        categoryName: formData.category
      }];

      Ext.Ajax.request({
        url: 'http://localhost:7000/api/v1/products/create-products',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        jsonData: productData,
        success: function(response) {
          console.log('Product saved successfully>>>>>', response);

          var responseData = Ext.decode(response.responseText);
          Ext.Msg.alert("Success", responseData.msg);

          button.up('window').close(); //Close window
        },
        failure: function(response) {
          Ext.Msg.alert("Failed", "Failed to save inventory data");
        }
      });
    }
  }
  
});

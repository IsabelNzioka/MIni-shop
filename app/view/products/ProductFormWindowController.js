Ext.define("Mini-shop.view.products.ProductFormWindowController", {
  extend: "Ext.app.ViewController",
  alias: "controller.productformwindowcontroller",

  init: function () {},

  onProductSave: function () {
    let window = this.getView();
    let references = window.getReferences();
    let form = references["productform"].getForm();

    if (form.isValid()) {
      console.log("isValid >>>>>>>>>>>>>>>>>>>>> Clicked");
      form.submit({
        method: "POST",
        url: "http://localhost:7000/api/products",   // TODO - CHange the url
        success: function (form, action) {
          Ext.Msg.alert("Success", action.result.msg);
        },
        failure: function (form, action) {
          Ext.Msg.alert("Failed", action.result.msg);
        },
      });
    } else {
      Ext.Msg.alert("Invalid Data", "Please correct form errors");
    }
  },
});

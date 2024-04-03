Ext.define("Mini-shop.view.login.Login", {
    extend: "Ext.window.Window",
    xtype: "login",
    requires: ["Mini-shop.view.login.LoginController", "Ext.form.Panel"],
    controller: "login",
    bodyPadding: 10,
    title: "Login Window",
    closable: false,
    autoShow: true,
    draggable: false,
    resizable: false,
    layout: "fit",
    items: {
      xtype: "form",
      reference: "form",  
      items: [
        {
          xtype: "form",
          reference: "loginform",
          itemId: "loginform",
          items: [
            {
              xtype: "textfield",
              name: "email",
              fieldLabel: "Email",
              allowBlank: false,
            },
            {
              xtype: "textfield",
              name: "password",
              inputType: "password",
              fieldLabel: "Password",            
              allowBlank: false,
            },
           
          ],
        },
      ],
      buttons: [
        {
          text: "Login",
          formBind: true,
          listeners: {
            click: "onLoginClick",
          },
        },
      ],
    },
  });
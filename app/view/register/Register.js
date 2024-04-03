Ext.define("Mini-shop.view.register.Register", {
  extend: "Ext.window.Window",
  xtype: "register",
  requires: ["Mini-shop.view.register.RegisterController", "Ext.form.Panel"],
  controller: "register",
  bodyPadding: 20,
  closable: false,
  autoShow: true,
  draggable: false,
  resizable: false,
  layout: "fit",

  items: [
    {
      xtype: "form",
      bodyPadding: 10,
      reference: "registerform",
      itemId: "registerform",
      border: false,
      items: [
        {
          xtype: "image",
          height: 120,
          width: 280,
          margin: "0 0 0 0",
          alt: "register-image",
          style: {
            backgroundImage:
              "url(https://plus.unsplash.com/premium_photo-1681487985079-b299ac8ba1df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGNhcnR8ZW58MHx8MHx8fDA%3D)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          },
        },
        {
          xtype: "component",
          width: 280,
          height: 27,
          margin: "40 0",
          html: "Create Account",
          style: {
            "font-size": "20px",
            "text-align": "center",
            margin: "auto",
          },
        },
        {
          xtype: "textfield",
          name: "username",
          fieldLabel: "Username",
          allowBlank: false,
        },
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
        {
          xtype: "button",
          text: "CREATE ACCOUNT",
          autoSize: true,
          handler: "onRegisterClick",
          height: 30,
          width: 280,
          margin: "20 0 ",
          style: {
            "text-align": "center",
            "letter-spacing": "1.25px",
            "font-size": "14px",
          },
        },
        {
          xtype: "component",
          margin: "20  0",
          width: 280,
          style: {
            "font-size": "16px",
            "text-align": "center",
            color: "var(--base-foreground-color)",
            "letter-spacing": "1.25px",
          },
          html:
            "Already have an account?" 
        },
        {
          xtype: "button",
          text: "LOGIN",
          autoSize: true,        
          height: 30,
          width: 280,
          margin: "20 0 0 0",
          style: {
            "text-align": "center",
            "letter-spacing": "1.25px",
            "font-size": "14px",
          },
          listeners: {              
            click: 'onLoginClick'
          }
        }
      ],
    },
  ],
});
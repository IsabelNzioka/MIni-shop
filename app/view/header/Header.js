Ext.define("Mini-shop.view.header.Header", {
  extend: "Ext.toolbar.Toolbar",
  xtype: "appheader",
  ui: "footer",
  items: [
    '->',
    {
      xtype: "button",
      itemId: "logout",
      text: "Logout",
      reference: "logout",
      iconCls: "fa fa-sign-out fa-lg buttonIcon",
      listeners: {
        click: "onLogout",
      },
    },
  ],
});

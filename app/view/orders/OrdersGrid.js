Ext.define("Mini-shop.view.orders.OrdersGrid", {
  extend: "Ext.grid.Panel",
  xtype: "ordersgrid",
  //controller: "albumgridviewcontroller",
  store: {
    type: "orders",
  },

  columns: [
    { dataIndex: "orderNumber", text: "Order Number" },
    { dataIndex: "userId", text: "User id" },
    { dataIndex: "orderTime", text: "Order Time" },
    { dataIndex: "orderTotal", text: "Order Total" },
  ],
  selModel: {
    selType: "checkboxmodel",
    mode: "SINGLE",
  },
  bbar: {
    xtype: "pagingtoolbar",
    displayInfo: true,
  },
  scrollable: true,
  height: 800,
});

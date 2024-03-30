Ext.define("Mini-shop.view.orders.OrdersGrid", {
  extend: "Ext.grid.Panel",
  xtype: "ordersgrid",
  controller: "orderscontroller",
  store: {
    type: "orders",
  },

  columns: [
    { dataIndex: "orderNumber", text: "Order Number", flex:1.5 },
    { dataIndex: "userId", text: "User id", flex:1 },
    { dataIndex: "orderTime", text: "Order Time", flex:1 },
    { dataIndex: "orderTotal", text: "Order Total", flex:1 },
  ],
  selModel: {
    selType: "checkboxmodel",
    mode: "SINGLE",
  },
  bbar: {
    xtype: "pagingtoolbar",
    displayInfo: true,
  },
  listeners: {
    cellClick: "onOrderGridCellClick",
  
  },

  scrollable: true,
  height: 800,
});

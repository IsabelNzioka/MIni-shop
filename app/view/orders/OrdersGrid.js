Ext.define("Mini-shop.view.orders.OrdersGrid", {
  extend: "Ext.grid.Panel",
  xtype: "ordersgrid",
  reference: "ordersgrid",
  controller: "orderscontroller",
  store: {
    type: "orders",
  },

  columns: [
    { dataIndex: "orderNumber", text: "Order Number", flex: 1.5 },
    { dataIndex: "userId", text: "User id", flex: 1 },
    { dataIndex: "orderTime", text: "Order Time", flex: 1 },
    { dataIndex: "orderTotal", text: "Order Total", flex: 1 },
  ],
  selModel: {
    selType: "checkboxmodel",
    mode: "SINGLE",
  },
  tbar: {
    overflowHandler: "menu",
    items: [
      {
        text: "Show Details",
        handler: "onShowDetails",
        bind: {
          disabled: "{!ordersgrid.selection}",
        },
      },
    ],
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

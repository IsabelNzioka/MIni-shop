Ext.define("Mini-shop.view.orders.OrderDetails", {
  extend: "Ext.window.Window",
  xtype: "orderdetails",
  title: "Order Details",
  height: 500, // when choosing items I will not set the height to avoid making it fixed
  width: 900,
  autoShow: true,
  autoScroll: true,
  layout: "fit",
  modal: true,
  record: "hello",

  items: [
    {
      xtype: "container",
      items: [
        {
          layout: "hbox",
          xtype: "container",
          items: [
            {
              html: "<h2> My Orders </h2>",
              bodyPadding: 5,
              flex: 1,
            },
            {
              xtype: "splitter",
            },
            {
              html: "<h2> Order Summary </h2>",
              bodyPadding: 5,
              flex: 1,
            },
          ],
        },
        {
          layout: "hbox",
          xtype: "container",
          items: [
            {
              html: [
                "<p> Nike j4  - 100; </p>",
                " <p> Nike sb  - 100; </p>  ",
                " <p> Nike air max  - 300; </p> ",
              ],
              bodyPadding: 5,
              flex: 1,
            },
            {
              xtype: "splitter",
            },
            {
              html: [
                "<p> Subtotal  - 100; </p>",
                " <p> Tax  - 100; </p>  ",
                " <p> Total  - 500; </p> ",
              ],
              bodyPadding: 5,
              flex: 1,
            },
          ],
        },
      ],
    },
  ],
});

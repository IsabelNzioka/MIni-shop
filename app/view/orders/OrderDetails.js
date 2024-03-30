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

  items: [
    {
      xtype: "container",
      items: [
        {
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
                      bodyPadding: 3,
                      flex: 1,
                    },
                    {
                      xtype: "splitter",
                    },
                    {
                      html: "<h2> Order Summary </h2>",
                      bodyPadding: 3,
                      flex: 1,
                    },
                  ],
                },
                {
                  layout: "hbox",
                  xtype: "container",
                  items: [
                    {
                      html: "<p> Nike j4 </p>",
                      bodyPadding: 3,
                      flex: 1,
                    },
                    {
                      xtype: "splitter",
                    },
                    {
                      html: "<h4> Subtotal: $ 225 </h4>",
                      bodyPadding: 3,
                      flex: 1,
                    },
                  ],
                },
                {
                  layout: "hbox",
                  xtype: "container",
                  items: [
                    {
                      html: "<p> Nike Air force </p>",
                      bodyPadding: 3,
                      flex: 1,
                    },
                    {
                      xtype: "splitter",
                    },
                    {
                      html: "<h4> Taxes: $ 25 </h4>",
                      bodyPadding: 3,
                      flex: 1,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});

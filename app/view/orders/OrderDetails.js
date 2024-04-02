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
  data: [
    {
      productName: "Nike J4",
      productPrice: 20,
      productQuantity: "3",
    },
    {
      productName: "Stan Smith",
      productPrice: 20,
      productQuantity: "5",
    },
    {
      productName: "Converse",
      productPrice: 15,
      productQuantity: "1",
    },
  ],
  html: [
    '<div class="title" style="  padding: 0 20px;">',
    '<div class="item" style="display: flex; justify-content: space-between; align-items: center; ">',
    '<h3  style="width: 150px; text-align: center;"> Product Name </h3>',
    '<h3  style="width: 150px; text-align: center;"> Price  </h3>',
    '<h3  style="width: 150px; text-align: center;"> Quantity </h3>',
    "</div>",
    "</div>",
  ],
  tpl: [
    '<div class="singleItem" style="margin-bottom: 10px;  padding: 0 20px;">',
    '<tpl for=".">',
    '<div class="item" style="display: flex; justify-content: space-between; align-items: center; ">',
    '<p  style="width: 150px; text-align: center;"> {productName} </p>',
    '<p  style="width: 150px; text-align: center;"> Ksh:  {productPrice} </p>',
    '<p  style="width: 150px; text-align: center;"> {productQuantity} </p>',
    "</div>",
    "</tpl>",
    "</div>",
    "<hr>",
    '<div class="totals" style=" margin:auto 20px; padding: 0 20px;">',
    '<div class="item" >',
    '<h4  style="width: 150px; text-align: start;"> Subtotal: Ksh 55 </h4>',
    '<h4  style="width: 150px; text-align: start;"> Discount: Ksh 10 </h4>',
    '<h4  style="width: 150px; text-align: start;"> Total:  Ksh 45 </h4>',
    "</div>",
    "</div>",
  ],

  // items: [
  //   {
  //     xtype: "container",
  //     items: [
  //       {
  //         layout: "hbox",
  //         xtype: "container",
  //         items: [
  //           {
  //             html: "<h2> My Orders </h2>",
  //             bodyPadding: 5,
  //             flex: 1,
  //           },
  //           {
  //             xtype: "splitter",
  //           },
  //           {
  //             html: "<h2> Order Summary </h2>",
  //             bodyPadding: 5,
  //             flex: 1,
  //           },
  //         ],
  //       },
  //       {
  //         layout: "hbox",
  //         xtype: "container",
  //         items: [
  //           {
  //             html: [
  //               "<p> Nike j4  - 100; </p>",
  //               " <p> Nike sb  - 100; </p>  ",
  //               " <p> Nike air max  - 300; </p> ",
  //             ],
  //             bodyPadding: 5,
  //             flex: 1,
  //           },
  //           {
  //             xtype: "splitter",
  //           },
  //           {
  //             html: [
  //               "<p> Subtotal  - 100; </p>",
  //               " <p> Tax  - 100; </p>  ",
  //               " <p> Total  - 500; </p> ",
  //             ],
  //             bodyPadding: 5,
  //             flex: 1,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ],
});

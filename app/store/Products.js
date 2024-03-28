Ext.define("Mini.app.store.Products", {
  extend: "Ext.data.Store",
  alias: "store.products",
  storeId: "products",
  model: "Mini.app.model.Product",
  requires: ["Mini.app.model.Product"],
  autoLoad: true,
  sorters: ["id"],
  pageSize: 25,
  data: [
    {
      id: 1,
      name: "Product 1",
      productCode: "ABC123",
      price: 10.99,
      image:
        "https://images.unsplash.com/photo-1531092601737-e5b3b6e57365?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHRlY2glMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      name: "Product 2",
      productCode: "DEF456",
      price: 19.99,
      image:
        "https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Product 3",
      productCode: "GHI789",
      price: 25.49,
      image:
        "https://images.unsplash.com/photo-1531092601737-e5b3b6e57365?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHRlY2glMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D",
    },

    {
      id: 4,
      name: "Product 1",
      productCode: "ABC123",
      price: 10.99,
      image:
        "https://images.unsplash.com/photo-1531092601737-e5b3b6e57365?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHRlY2glMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 5,
      name: "Product 2",
      productCode: "DEF456",
      price: 19.99,
      image:
        "https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "Product 3",
      productCode: "GHI789",
      price: 25.49,
      image:
        "https://images.unsplash.com/photo-1531092601737-e5b3b6e57365?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHRlY2glMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ],
});

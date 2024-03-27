/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define("Mini.app.view.main.Main", {
  extend: "Ext.tab.Panel",
  xtype: "app-main",

  requires: [
    "Ext.plugin.Viewport",
    "Ext.window.MessageBox",

    "Mini.app.view.main.MainController",
    "Mini.app.view.main.MainModel",
    "Mini.app.view.main.List",
  ],

  controller: "main",
  viewModel: "main",

  ui: "navigation",

  tabBarHeaderPosition: 1,
  titleRotation: 0,
  tabRotation: 0,

  header: {
    layout: {
      align: "stretchmax",
    },
    title: {
      bind: {
        text: "{name}",
      },
      flex: 0,
    },
    iconCls: "fa-th-list",
  },

  tabBar: {
    flex: 1,
    layout: {
      align: "stretch",
      overflowHandler: "none",
    },
  },

  responsiveConfig: {
    tall: {
      headerPosition: "top",
    },
    wide: {
      headerPosition: "left",
    },
  },

  defaults: {
    bodyPadding: 20,
    tabConfig: {
      responsiveConfig: {
        wide: {
          iconAlign: "left",
          textAlign: "left",
        },
        tall: {
          iconAlign: "top",
          textAlign: "center",
          width: 120,
        },
      },
    },
  },

  items: [
    {
      title: "Products",
      iconCls: "fa-home",
      // The following grid shares a store with the classic version's grid as well!
      items: [
        {
          xtype: "products",
        },
      ],
    },
    {
      title: "Users",
      iconCls: "fa-user",
      bind: {
        html: "{loremIpsum}",
      },
    },
    {
      title: "Groups",
      iconCls: "fa-users",
      bind: {
        html: "{loremIpsum}",
      },
    },
    {
      title: "Settings",
      iconCls: "fa-cog",
      bind: {
        html: "{loremIpsum}",
      },
    },
  ],
});

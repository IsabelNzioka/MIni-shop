/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define("Mini.app.view.main.MainController", {
  extend: "Ext.app.ViewController",

  alias: "controller.main",

  //! Routing

  routes: {
    products: "onProductRoute",
    "orders|inventoriesgrid|cart|requests|logs|checkout": {
      action: "onRoute",
      before: "onBeforeRoute",
    },
  },

  //   routes: {
  //     home: "onHomeRoute",
  //     "users|reviewpanel|posts|todos|summary|grouping|albums|trialbalance": {
  //       action: "onRoute",
  //       before: "onBeforeRoute",
  //     },
  //     "users/:id": {
  //       action: "onUserSelect",
  //       before: "onBeforeUserSelect",
  //       conditions: {
  //         ":id": "([0-9]+)",
  //       },
  //     },
  //     "posts/:id": {
  //       action: "onPostSelect",
  //       before: "onBeforePostSelect",
  //       conditions: {
  //         ":id": "([0-9]+)",
  //       },
  //     },
  //   },

  //!default route
  onProductRoute: function () {
    let mainPanel = this.getMainPanel();
    if (mainPanel) {
      mainPanel.setActiveTab(0);
    }
  },

  //! gets the token, compares with menu items -> obtain record and set it to active tab
  onRoute: function () {
    var me = this,
      hash = Ext.util.History.getToken(),
      mainmenu = this.getMainMenu();
    me.locateMainMenuItem(mainmenu, hash);
  },

  //! Before routing to get the hash
  onBeforeRoute: function (action) {
    var hash = Ext.util.History.getToken();

    if (hash) {
      action.resume();
    }
    // TODO When handling authentication
    // var hasAccessToUsers = localStorage.getItem("hasAccessToUsers");
    // if (hasAccessToUsers) {
    //   action.resume();
    // } else {
    //   Ext.Msg.show({
    //     title: "Failure",
    //     msg: "You do not have permission to access: /" + hash,
    //     buttons: Ext.Msg.OK,
    //     icon: Ext.Msg.ERROR,
    //   });
    //   action.stop();
    // }
  },

  //!Get Main Panel
  getMainPanel: function () {
    return Ext.ComponentQuery.query("mainpanel")[0];
  },

  //!Get Main Menu - panel
  getMainMenu: function () {
    return Ext.ComponentQuery.query("mainmenu")[0];
  },

  //! Calling it on hash click to match with the side  menu
  locateMainMenuItem: function (mainMenu, className) {
    // let store = mainMenu.getStore();

    let rootNode = mainMenu.getRootNode();
    let record = rootNode.findChild("className", className, true);
    // console.log("::::::::::::::::");
    // console.log(record);
    this.openTab(record);
    mainMenu.getSelectionModel().select(record);
  },

  //! gets record and sets the hash to be active
  openTab: function (record) {
    if (record) {
      let mainPanel = this.getMainPanel();
      let activeTab = mainPanel.items.findBy(
        (tabItem) => tabItem.title === record.get("text")
      );
      if (!activeTab && record.get("leaf")) {
        //create new tab using details from the record
        activeTab = mainPanel.add({
          closable: true,
          xtype: record.get("className"),
          title: record.get("text"),
          iconCls: record.get("iconCls"),
        });
      }
      mainPanel.setActiveTab(activeTab);
    }
  },

  // onMainMenuItemClick: function (view, record, item, index, e, eOpts) {
  //   this.redirectTo(record.get("className"));
  //   //! In the menu controller is where I am redirecting the link
  // },
});

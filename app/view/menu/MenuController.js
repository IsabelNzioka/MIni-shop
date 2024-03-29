Ext.define('Mini.app.view.menu.MenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.menucontroller',

    getMainPanel: function () {
        return Ext.ComponentQuery.query('mainpanel')[0];
    },
    
    onMainMenuItemClick: function (tree, rec, item) {
        let data = rec.data;

        if (data) {
            let text = data.text;
            let iconCls = data.iconCls;

            let mainPanel = this.getMainPanel();
            let activeTab = mainPanel.items.findBy((tabItem) => tabItem.title === text);
            if (!activeTab && data.leaf) {
                activeTab = mainPanel.add({
                    closable: true,
                    xtype: data.className || 'panel',
                    title: text,
                    iconCls: iconCls
                });
            }
            mainPanel.setActiveTab(activeTab);
        } else {
            console.error("Invalid data structure:", item);
        }
    },

    onToggleMicro: function (button, pressed) {
        var mainMenu = this.getView();
        var isMicroMode = mainMenu.getWidth() === 44;
        mainMenu.setMicro(!isMicroMode); // Toggle the micro mode
    }

});

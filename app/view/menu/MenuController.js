Ext.define('Mini.app.view.menu.MenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.menucontroller',

    getMainPanel: function () {
        return Ext.ComponentQuery.query('mainpanel')[0];
    },
    onMainMenuItemClick: function (view, record, item, index, e, eOpts) {
        // Access the data directly from the item
        let data = item.data;
    
        if (data) {
            // Now you can access the properties of the data, such as text and iconCls
            console.log(data.text); // Log the text property of the record
            console.log(data.iconCls); // Log the iconCls property of the record
    
            // Accessing text and iconCls for further usage, such as creating tabs
            let text = data.text;
            let iconCls = data.iconCls;
    
            let mainPanel = this.getMainPanel();
            let activeTab = mainPanel.items.findBy((tabItem) => tabItem.title === text);
            if (!activeTab && data.leaf) {
                //create new tab using details from the data
                activeTab = mainPanel.add({
                    closable: true,
                    xtype: data.className || 'panel', // Using className if available, otherwise default to 'panel'
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
        var isMicroMode = mainMenu.getWidth() === 44; // Check if the menu is currently in micro mode
        mainMenu.setMicro(!isMicroMode); // Toggle the micro mode
    }
    
});

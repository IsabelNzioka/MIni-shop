Ext.define('Mini.app.view.menu.MainMenu', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainmenu',
    cls: 'menu-background',

    requires: [
        'Mini.app.store.MenuItems'
    ],

    controller: 'menucontroller',
    viewModel: {
        stores: {
            navItems: {
                type: 'menuitems'
            }
        }
    },

    width: 250,
    floatable: false,
    layout: 'vbox',
    rootVisible: false,
    bodyPadding: 0,

    items: [{
        width: 250,
        reference: 'treelist',
        hidden: false,
        xtype: 'treelist',
        rootVisible: false,
        useArrows: true,
        bind: '{navItems}',
        listeners: {
            itemclick: 'onMainMenuItemClick'
        }
    }],

    tools: [{
        type: 'toggle',
        handler: 'onToggleMicro',
        tooltip: 'Toggle Micro'
    }],

    

    setMicro: function (microMode) {
        var treelist = this.lookupReference('treelist');
        if (microMode) {
            this.setWidth(44);

        } else {
            this.setWidth(250);

        }

        // Update the tooltip text based on the microMode
        var toggleButton = this.tools[0]; // Assuming the toggle button is the first tool
        toggleButton.setTooltip(microMode ? 'Expand Menu' : 'Collapse Menu');
    }

});

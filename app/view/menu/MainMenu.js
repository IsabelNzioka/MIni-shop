Ext.define('Mini.app.view.menu.MainMenu', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainmenu',
    itemId:'mainmenu',
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
            selectionchange: 'onMainMenuItemClick'
        }
    }],

    tools: [{
        type: 'toggle',
        handler: 'onToggleMicro',
        tooltip: 'Toggle Micro',
        glyph: 'xf0c9@FontAwesome',

    }],



    setMicro: function (microMode) {
        var mainMenu = this;
        var toggleButton = this.tools[0]; // Assuming the toggle button is the first tool
    
        if (microMode) {
            mainMenu.addCls('responsive-transition');
            mainMenu.setWidth(44);
            toggleButton.setGlyph('xf0a9@FontAwesome');
            toggleButton.setTooltip('Expand Menu');
        } else {
            mainMenu.addCls('responsive-transition');
            mainMenu.setWidth(250);
            toggleButton.setGlyph('xf0c9@FontAwesome');
            toggleButton.setTooltip('Collapse Menu');
        }
    }
    
    
    
});

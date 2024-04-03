Ext.define('Mini.app.view.checkout.CheckoutForm', {
    extend: 'Ext.form.Panel',
    xtype: 'checkoutform',

    title: 'Complete Check Out',
    width: 620,
    bodyPadding: 10,
    frame: true,

    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 110,
        msgTarget: Ext.supports.Touch ? 'side' : 'qtip'
    },

    items: [{
        xtype: 'fieldset',
        title: 'Contact Information',
        defaultType: 'textfield',
        layout: 'anchor',
        defaults: {
            anchor: '100%'
        },
        items: [{
            fieldLabel: 'Email Address',
            name: 'email',
            vtype: 'email',
            allowBlank: false
        }, {
            fieldLabel: 'Phone Number',
            name: 'phone',
            emptyText: '254-xxx-xxxxxx',
            maskRe: /[\d\-]/,
            regex: /^254-\d{3}-\d{6}$/,
            regexText: 'Must be in the format 254-xxx-xxxxxx',
            allowBlank: false
        }]
    }, {
        xtype: 'fieldset',
        title: 'Payment',
        layout: 'anchor',
        defaults: {
            anchor: '100%'
        },
        items: [{
            xtype: 'container',
            layout: 'hbox',
            margin: '0 0 5 0',

            items: [{
                xtype: 'textfield',
                fieldLabel: 'Phone Number',
                name: 'mobileMoneyPhone',
                emptyText: '254-xxx-xxxxxx',
                maskRe: /[\d\-]/,
                regex: /^254-\d{3}-\d{6}$/,
                regexText: 'Must be in the format 254-xxx-xxxxxx',
                allowBlank: false
            }, {
                xtype: 'combobox',
                fieldLabel: 'Mobile Money Provider',
                name: 'mobileMoneyProvider',
                emptyText: 'Select Provider',
                allowBlank: false,
                store: ['Airtel Money', 'Mpesa']
            }]
        }]
    }],

    buttons: [{
        text: 'Reset',
        handler: function () {
            this.up('form').getForm().reset();
        }
    }, {
        text: 'Complete Purchase',
        width: 150,
        handler: function () {
            var form = this.up('form').getForm();
            if (form.isValid()) {
                Ext.Msg.alert('Success', 'Form is valid. Ready for submission.');
            } else {
                Ext.Msg.alert('Error', 'Please fill in all required fields correctly.');
            }
        }
    }]
});

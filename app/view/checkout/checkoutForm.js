Ext.define('Mini.app.view.checkout.CheckoutForm', {
    extend: 'Ext.form.Panel',
    xtype: 'checkoutform',

    title: 'Complete Payment',
    width: 700,
    bodyPadding: 10,
    frame: true,
    viewModel: {
        data: {
            orderId: '',
            orderTime: '',
            orderTotal: '',
            paymentUrl: ''
        }
    },
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
            anchor: '100%',
            padding: '8',
        },
        items: [{
            fieldLabel: 'First Name',
            name: 'firstName',
            emptyText: 'e.g John',
            margin: '0 0 0 6',
            allowBlank: false
        }, {
            fieldLabel: 'Last Name',
            name: 'lastName',
            margin: '0 0 0 6',
            emptyText: 'e.g Doe',
            allowBlank: false
        }, {
            fieldLabel: 'Email Address',
            name: 'email',
            emptyText: 'e.g johndoe@example.com',
            margin: '0 0 0 6',
            vtype: 'email',
            allowBlank: false
        }]
    },
    {
        xtype: 'fieldset',
        title: 'Order Details',
        layout: 'anchor',
        defaults: {
            anchor: '100%',
            padding: '8',
        },
        items: [{
            xtype: 'displayfield',
            fieldLabel: 'Order ID',
            name: 'orderId',
            bind: '{orderId}',
            readOnly: true,
            submitValue: true,
            fieldStyle: 'font-weight: bold;'

        }, {
            xtype: 'displayfield',
            fieldLabel: 'Amount',
            name: 'amount',
            bind: '{orderTotal}',
            readOnly: true,
             submitValue: true,
            fieldStyle: 'font-weight: bold;'

        }]
    },


    {
        xtype: 'fieldset',
        title: 'Payment',
        layout: 'anchor',
        defaults: {
            anchor: '100%',
            padding: '8',
        },
        items: [{
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'combobox',
                fieldLabel: 'Payment Method',
                name: 'paymentMethod',
                readOnly: true,
                editable: false,
                store: {
                    type: 'paymentmethods'
                },
                displayField: 'name',
                valueField: 'value',
                value: 'MOBILE_MONEY',
                queryMode: 'local',
                forceSelection: true,
                listeners: {
                    afterrender: function (field) {
                        field.triggerEl.hide();
                    }
                }
            }, {
                xtype: 'radiogroup',
                fieldLabel: 'Mobile Money Provider',
                name: 'paymentProvider',
                allowBlank: false,
                items: [{
                    boxLabel: 'M-pesa',
                    inputValue: 'mpesa',
                    checked: true
                }, {
                    boxLabel: 'Airtel Money',
                    inputValue: 'airtelmoney'
                }]
            }, {
                xtype: 'textfield',
                fieldLabel: 'Phone Number',
                name: 'mobileMoneyPhoneNumber',
                emptyText: '254-xxx-xxxxxx',
                maskRe: /[\d\-]/,
                regex: /^254-\d{3}-\d{6}$/,
                regexText: 'Must be in the format 254-xxx-xxxxxx',
                allowBlank: false,
                margin: '5 0 0 0'
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
            var checkoutPanel = Ext.ComponentQuery.query('checkout')[0];
            console.log(checkoutPanel);
            var form = Ext.ComponentQuery.query('checkoutform')[0].getForm();


            var myMask = new Ext.LoadMask({
                msg: 'Processing Payment... Please Wait...',
                target: checkoutPanel
            });

var form = this.up('form').getForm();
var checkoutForm = this.up('checkoutform');
var baseUrl = 'http://localhost:7000/';
var paymentUrl = baseUrl + checkoutForm.getViewModel().get('paymentUrl');


            if (form.isValid()) {

                myMask.show();  


                form.submit({
                    url: paymentUrl,
                    method: 'POST',
                    jsonSubmit: true,
                    headers: {
                        'Content-Type': 'application/json'
                    },

                    success: function (form, action) {
                        myMask.hide();
                        Ext.Msg.alert('Success', 'Payment Processed successfully');
                        checkoutPanel.close();

                    },

                    failure: function (form, action) {
                        myMask.hide();
                        Ext.Msg.alert('Failed', 'Payment Processing failed');
                    }
                });
            } else {
                Ext.Msg.alert('Invalid Form Data', 'Please correct the form errors.');
            }
        }
    }
    ],

});

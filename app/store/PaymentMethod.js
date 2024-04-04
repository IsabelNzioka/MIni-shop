Ext.define('Mini.app.store.PaymentMethod', {
    extend: 'Ext.data.Store',
    alias: 'store.paymentmethods',

    fields: ['name', 'value'],

    data: [
        { name: 'Credit Card', value: 'CREDIT_CARD' },
        { name: 'Debit Card', value: 'DEBIT_CARD' },
        { name: 'PayPal', value: 'PAYPAL' },
        { name: 'Bank Transfer', value: 'BANK_TRANSFER' },
        { name: 'Mobile Money', value: 'MOBILE_MONEY' },
        { name: 'Cash on Delivery', value: 'CASH_ON_DELIVERY' }
    ]
});

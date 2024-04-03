Ext.define("Mini.app.store.Logs", {
    extend: 'Ext.data.Store',
    model: 'Mini.app.model.Log',

    alias: 'store.logs',
    requires: ['Mini.app.model.Log'],
    // sorters: ['date'],
    pageSize: 25,
    autoLoad: true,

    // Use data property to load the provided JSON directly
    data: {
        "logs": [
            { "type": "Error", "timestamp": "2024-04-01T08:30:00", "message": "Error occurred while processing request 1" },
            { "type": "Warning", "timestamp": "2024-04-01T09:45:00", "message": "Resource not found for request 2" },
            { "type": "Info", "timestamp": "2024-04-01T10:15:00", "message": "Request 3 processed successfully" },
            { "type": "Debug", "timestamp": "2024-04-01T11:20:00", "message": "Debug message for request 4" },
            { "type": "Error", "timestamp": "2024-04-01T12:00:00", "message": "Error occurred while processing request 5" },
            { "type": "Warning", "timestamp": "2024-04-01T13:10:00", "message": "Resource not found for request 6" },
            { "type": "Info", "timestamp": "2024-04-01T14:45:00", "message": "Request 7 processed successfully" },
            { "type": "Debug", "timestamp": "2024-04-01T15:30:00", "message": "Debug message for request 8" },
            { "type": "Error", "timestamp": "2024-04-01T16:20:00", "message": "Error occurred while processing request 9" },
            { "type": "Warning", "timestamp": "2024-04-01T17:00:00", "message": "Resource not found for request 10" },
            { "type": "Info", "timestamp": "2024-04-01T18:30:00", "message": "Request 11 processed successfully" },
            { "type": "Debug", "timestamp": "2024-04-01T19:15:00", "message": "Debug message for request 12" },
            { "type": "Error", "timestamp": "2024-04-01T20:40:00", "message": "Error occurred while processing request 13" },
            { "type": "Warning", "timestamp": "2024-04-01T21:00:00", "message": "Resource not found for request 14" },
            { "type": "Info", "timestamp": "2024-04-01T22:10:00", "message": "Request 15 processed successfully" },
            { "type": "Debug", "timestamp": "2024-04-01T23:30:00", "message": "Debug message for request 16" },
            { "type": "Error", "timestamp": "2024-04-02T00:20:00", "message": "Error occurred while processing request 17" },
            { "type": "Warning", "timestamp": "2024-04-02T01:45:00", "message": "Resource not found for request 18" },
            { "type": "Info", "timestamp": "2024-04-02T02:00:00", "message": "Request 19 processed successfully" },
            { "type": "Debug", "timestamp": "2024-04-02T03:20:00", "message": "Debug message for request 20" },
            { "type": "Error", "timestamp": "2024-04-02T04:30:00", "message": "Error occurred while processing request 21" },
            { "type": "Warning", "timestamp": "2024-04-02T05:45:00", "message": "Resource not found for request 22" },
            { "type": "Info", "timestamp": "2024-04-02T06:15:00", "message": "Request 23 processed successfully" },
            { "type": "Debug", "timestamp": "2024-04-02T07:30:00", "message": "Debug message for request 24" },
            { "type": "Error", "timestamp": "2024-04-02T08:00:00", "message": "Error occurred while processing request 25" },
            { "type": "Warning", "timestamp": "2024-04-02T09:10:00", "message": "Resource not found for request 26" },
            { "type": "Info", "timestamp": "2024-04-02T10:45:00", "message": "Request 27 processed successfully" },
            { "type": "Debug", "timestamp": "2024-04-02T11:30:00", "message": "Debug message for request 28" },
            { "type": "Error", "timestamp": "2024-04-02T12:20:00", "message": "Error occurred while processing request 29" },
            { "type": "Warning", "timestamp": "2024-04-02T13:00:00", "message": "Resource not found for request 30" },
            { "type": "Info", "timestamp": "2024-04-02T14:10:00", "message": "Request 31 processed successfully" },
            { "type": "Debug", "timestamp": "2024-04-02T15:20:00", "message": "Debug message for request 32" },
            { "type": "Error", "timestamp": "2024-04-02T16:30:00", "message": "Error occurred while processing request 33" },
            { "type": "Warning", "timestamp": "2024-04-02T17:45:00", "message": "Resource not found for request 34" },
            { "type": "Info", "timestamp": "2024-04-02T18:00:00", "message": "Request 35 processed successfully" }
        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'logs'
        }
    },
    filters: [{
        property: 'type',
        operator: 'in',
        value: ['Error', 'Warning', 'Info', 'Debug']
    }],

    // Implement grouping by type
    grouper: {
        groupFn: function(record) {
            return record.get('type');
        }
    },

    // Add sorting options for timestamp or log type
    sorters: [{
        property: 'timestamp',
        direction: 'DESC'
    }, {
        property: 'type',
        direction: 'ASC'
    }],

    filters: [{
        property: 'type',
        operator: 'in',
        value: ['Error', 'Warning', 'Info', 'Debug']
    }],
    onStoreLoad: function(store, records, successful, operation, eOpts) {
        if (successful) {
            var counts = {}; // Use an object to store counts by type
            store.each(function(record) {
                var type = record.get('type');
                console.log('Record type:', type); // Log the type of each record
                counts[type] = (counts[type] || 0) + 1; // Increment count for each type
            });
    
            console.log('Counts:', counts); // Log the counts object
    
            var data = [];
            for (var type in counts) {
                if (counts.hasOwnProperty(type)) {
                    data.push({
                        type: type,
                        count: counts[type]
                    });
                }
            }
    
            store.setData(data);
        }
    }
});

const events = [

    {
        id: 1,
        event_name  : "tabling",
        time_start  : "10/24/21",
        time_end    : "10/25/21",
        attendees   : {
                Will  : true,
                Russ  : true,
                Anwar : false
            }
    },
    {
        id: 2,
        event_name  : "CSP Project",
        time_start  : "10/25/21",
        time_end    : "10/27/21",
        attendees   : {
                Tiffany  : true,
                James  : false,
                Quinn : false
            }
    }
];

module.exports = events;
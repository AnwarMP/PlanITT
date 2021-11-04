const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const events = require('../../events');

//route gets all events
router.get('/', (req, res) => {
    res.json(events)
 });

//get single members
router.get('/:id', (req, res) => {
    const found = events.some(events => events.id === parseInt(req.params.id));

    if(found)
    {
        res.json(events.filter(events => events.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg: `No event with id of ${req.params.id}`});
    }
   
});

//creating a new event
//can be done through form submission https://stackoverflow.com/questions/22195065/how-to-send-a-json-object-using-html-form-data
//have to change this when using a data base 
router.post('/',(req, res) => {
    res.send(req.body);
    const newEvent = {
        id: uuid.v4(),
        event_name: req.body.name,
        time_start: req.body.time_start,
        time_end: req.body.time_end,
        attendees: req.body.attendees
    }

    if(!newEvent.event_name || !newEvent.time_end || !newEvent.time_start) {
        return res.status(400).json({msg: "Please fix format"});
    }

    events.push(newEvent);
    res.json(events);
})

//updating an existing event for the raspberrry pi
router.put('/:id', (req, res) => {
    const found = events.some(events => events.id === parseInt(req.params.id));

    if(found)
    {
        const updEvent = req.body;
        events.forEach(event => {
            if(event.id === parseInt(req.params.id)) {
                event.event_name = updEvent.event_name ? updEvent.event_name: event.event_name;
                event.time_start = updEvent.time_start ? updEvent.time_start: event.time_start ;
                event.time_end = updEvent.time_end ? updEvent.time_end: event.time_end;
                event.attendees = updEvent.attendees ? updEvent.attendees: event.attendees ;
                res.json({msg: 'member updated', event});
            }
        })
        res.json(events.filter(events => events.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg: `No event with id of ${req.params.id}`});
    }
   
});

//deleting an event
router.delete('/:id', (req, res) => {
    const found = events.some(events => events.id === parseInt(req.params.id));

    if(found)
    {
        res.json({
            msg: 'Member Deleted',
            events: events.filter(events => events.id !== parseInt(req.params.id))});
    } else {
        res.status(400).json({msg: `No event with id of ${req.params.id}`});
    }
   
});
module.exports = router;
const mongoose = require("mongoose");

const eventsSchema = new mongoose.Schema({
  event_id: {
      type: int,
      required: true,
  },
  event_name: {
      type: String,
      required: true,
  },
  time_start: {
      type: String,
      required: true,
  },
  time_end: {
      type: String,
      required: true,
  },
  attendees: [
      {
          name: {
              type: boolean,
              required: true,
          }
      }
  ],
});

const event = mongoose.model("event", eventsSchema);

module.exports = event;
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Stuff = new Mongo.Collection('Stuff');

/**
 * Create the schema for Stuff
 */
export const StuffSchema = new SimpleSchema({
  courseName: {
    label: 'Course Name',
    type: String,
    optional: false,
    max: 50,
    autoform: {
      placeholder: 'Course Name',
    },
  },
  courseNum: {
    label: 'Course Number',
    type: String,
    max: 10,
    optional: false,
    autoform: {
      placeholder: 'Course Number',
    },
  },
  roomNum: {
    label: 'Room Number',
    type: String,
    max: 10,
    optional: false,
    autoform: {
      placeholder: 'Room Number',
    },
  },
  startTime: {
    label: 'Start Time',
    type: String,
    optional: false,
    autoform: {
      afFieldInput: {
        type: 'datetimepicker',
        opts: {
          datepicker: false,
          format:'H:mm',
          step: 10,
          minTime: '8:00 AM',
          maxTime: '10:10 PM'
        }
      }
    }
  },
  endTime: {
    label: 'End Time',
    type: String,
    optional: false,
    autoform: {
      afFieldInput: {
        type: 'datetimepicker',
        opts: {
          datepicker: false,
          format:'H:mm',
          step: 10,
          minTime: '8:00 AM',
          maxTime: '10:10 PM'
        }
      }
    }
  },
  monday: {
    label: 'Monday',
    type: Boolean,
    autoform: {
      type: 'boolean-checkbox'
    }
  },
  tuesday: {
    label: 'Tuesday',
    type: Boolean,
    autoform: {
      type: 'boolean-checkbox'
    }
  },
  wednesday: {
    label: 'Wednesday',
    type: Boolean,
    autoform: {
      type: 'boolean-checkbox'
    }
  },
  thursday: {
    label: 'Thursday',
    type: Boolean,
    autoform: {
      type: 'boolean-checkbox'
    }
  },
  friday: {
    label: 'Friday',
    type: Boolean,
    autoform: {
      type: 'boolean-checkbox'
    }
  },
});

Stuff.attachSchema(StuffSchema);

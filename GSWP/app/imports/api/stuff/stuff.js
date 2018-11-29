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
    optional: true,
    autoform: {
      placeholder: 'Course Number',
    },
  },
  roomNum: {
    label: 'Room Number',
    type: String,
    max: 10,
    optional: true,
    autoform: {
      placeholder: 'Room Number',
    },
  },
  startTime: {
    type: Date,
    autoform: {
      afFieldInput: {
        type: 'bootstrap-datetimepicker',
        dateTimePickerOptions: {
          pickDate: false
        }
      }
    }
  },
  startPeriod: {
    label: 'AM/PM',
    type: String,
    max: 2,
    optional: false,
    autoform: {
      placeholder: '',
    },
  },
  endTime: {
    type: Date,
    autoform: {
      afFieldInput: {
        type: 'bootstrap-datetimepicker',
        dateTimePickerOptions: {
          pickDate: false
        }
      }
    }
  },
  endPeriod: {
    label: 'AM/PM',
    type: String,
    max: 2,
    optional: false,
    autoform: {
      placeholder: '',
    },
  },
});

Stuff.attachSchema(StuffSchema);

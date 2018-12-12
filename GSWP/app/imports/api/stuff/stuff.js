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
  startHour: {
    type: String,
    allowedValues: ['8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
    optional: false,
    label: 'Start Hour',
    autoform: {
      options: [{ label: '8', value: '8' }, { label: '9', value: '9' }, { label: '10', value: '10' },
        { label: '11', value: '11' }, { label: '12', value: '12' }, { label: '13', value: '13' },
        { label: '14', value: '14' }, { label: '15', value: '15' }, { label: '16', value: '16' },
        { label: '17', value: '17' }, { label: '18', value: '18' }, { label: '19', value: '19' },
        { label: '20', value: '20' }],
    },
  },
  startMin: {
    type: String,
    allowedValues: ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'],
    optional: false,
    label: 'Start Minute',
    autoform: {
      options: [{ label: '00', value: '00' }, { label: '05', value: '05' }, { label: '10', value: '10' },
        { label: '15', value: '15' }, { label: '20', value: '20' }, { label: '25', value: '25' },
        { label: '30', value: '30' }, { label: '35', value: '35' }, { label: '40', value: '40' },
        { label: '45', value: '45' }, { label: '50', value: '50' }, { label: '55', value: '55' }],
    },
  },
  endHour: {
    type: String,
    allowedValues: ['8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
    optional: false,
    label: 'End Hour',
    autoform: {
      options: [{ label: '8', value: '8' }, { label: '9', value: '9' }, { label: '10', value: '10' },
        { label: '11', value: '11' }, { label: '12', value: '12' }, { label: '13', value: '13' },
        { label: '14', value: '14' }, { label: '15', value: '15' }, { label: '16', value: '16' },
        { label: '17', value: '17' }, { label: '18', value: '18' }, { label: '19', value: '19' },
        { label: '20', value: '20' }],
    },
  },
  endMin: {
    type: String,
    allowedValues: ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'],
    optional: false,
    label: 'End Minute',
    autoform: {
      options: [{ label: '00', value: '00' }, { label: '05', value: '05' }, { label: '10', value: '10' },
        { label: '15', value: '15' }, { label: '20', value: '20' }, { label: '25', value: '25' },
        { label: '30', value: '30' }, { label: '35', value: '35' }, { label: '40', value: '40' },
        { label: '45', value: '45' }, { label: '50', value: '50' }, { label: '55', value: '55' }],
    },
  },
  monday: {
    label: 'Monday',
    type: Boolean,
    autoform: {
      type: 'boolean-checkbox',
    },
  },
  tuesday: {
    label: 'Tuesday',
    type: Boolean,
    autoform: {
      type: 'boolean-checkbox',
    },
  },
  wednesday: {
    label: 'Wednesday',
    type: Boolean,
    autoform: {
      type: 'boolean-checkbox',
    },
  },
  thursday: {
    label: 'Thursday',
    type: Boolean,
    autoform: {
      type: 'boolean-checkbox',
    },
  },
  friday: {
    label: 'Friday',
    type: Boolean,
    autoform: {
      type: 'boolean-checkbox',
    },
  },
  calColor: {
    type: String,
    allowedValues: ['1', '2', '3', '4'],
    optional: false,
    label: 'Event Color',
    autoform: {
      options: [{ label: 'Dark Blue', value: '1' }, { label: 'Purple', value: '2' },
                { label: 'Light Blue', value: '3' }, { label: 'Yellow', value: '4' }],
    },
  },
});

Stuff.attachSchema(StuffSchema);


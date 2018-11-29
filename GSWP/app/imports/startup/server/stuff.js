import { _ } from 'meteor/underscore';
import { Stuff } from '../../api/stuff/stuff.js';

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const stuffSeeds = [
/**  { courseName: 'Fundamentals of Software Engineering', courseNum: 'CS320', roomNum: 'VSCI???',
    startHour: 12, startMinute: 00, startPeriod: 'PM',
    endHour: 1, endMinute: 15, endPeriod: 'PM'} **/
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Stuff.find().count() === 0) {
  _.each(stuffSeeds, function seedStuffs(stuff) {
    Stuff.insert(stuff);
  });
}

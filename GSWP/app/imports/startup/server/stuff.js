import { _ } from 'meteor/underscore';
import { Stuff } from '../../api/stuff/stuff.js';

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const stuffSeeds = [
  { courseName: 'Fundamentals of Software Engineering', courseNum: 'CS320', roomNum: 'VSCI???',
    startTime: "12:00", endTime: "13:20",
    monday: true, tuesday: false, wednesday: false, thursday: false, friday:false}
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Stuff.find().count() === 0) {
  _.each(stuffSeeds, function seedStuffs(stuff) {
    Stuff.insert(stuff);
  });
}

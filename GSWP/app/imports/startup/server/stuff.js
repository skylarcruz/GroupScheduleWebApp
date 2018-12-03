import { _ } from 'meteor/underscore';
import { Stuff } from '../../api/stuff/stuff.js';

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const stuffSeeds = [
  { courseName: 'Fundamentals of Software Engineering', courseNum: 'CS320', roomNum: 'VSCI 12',
    startHour: "12", startMin: "00", endHour: "13", endMin: "15",
    monday: false, tuesday: true, wednesday: false, thursday: true, friday:false, calColor: '1'}
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Stuff.find().count() === 0) {
  _.each(stuffSeeds, function seedStuffs(stuff) {
    Stuff.insert(stuff);
  });
}

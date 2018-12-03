import { Template } from 'meteor/templating';
import { Stuff } from '../../api/stuff/stuff.js';

Template.Calendar.helpers({

  /**
   * @returns {*} All of the Contact documents.
   */
  stuffList() {
    return Stuff.find();
  },
});
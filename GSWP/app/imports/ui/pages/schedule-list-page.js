import { Template } from 'meteor/templating';
import { Stuff } from '../../api/stuff/stuff.js';

Template.Schedule_List_Page.helpers({

  /**
   * @returns {*} All of the Contact documents.
   */
  stuffList() {
    return Stuff.find();
  },
});
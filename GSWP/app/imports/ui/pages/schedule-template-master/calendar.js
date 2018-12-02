import { Template } from 'meteor/templating';
import { Stuff } from '../../api/stuff/stuff.js';

Template.Calendar.helpers({
  stuffCollection() {
    return Stuff;
  },
});

Template.Calendar.onRendered(function () {

});
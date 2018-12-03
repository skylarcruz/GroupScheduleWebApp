import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Stuff } from '../../api/stuff/stuff.js';

/* eslint-disable object-shorthand, no-unused-vars */

/**
 * After successful addition of a new Contact document, go to Home page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  AddToScheduleForm: {
    /**
     * After successful form submission, go to Home_Page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function onSuccess(formType, result) {
      FlowRouter.go('Schedule_List_Page');
    },
  },
});

Template.Add_To_Schedule_Page.helpers({
  stuffCollection() {
    return Stuff;
  },
});

//Template.dpReplacement.replaces("afBootstrapDateTimePicker");
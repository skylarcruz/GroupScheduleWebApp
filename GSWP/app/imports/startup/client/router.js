import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/schedule', {
  name: 'Schedule_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Schedule_Page' });
  },
});

FlowRouter.route('/calendar', {
  name: 'Calendar',
  action() {
    BlazeLayout.render('App_Body', { main: 'Calendar' });
  },
});

FlowRouter.route('/schedule-list', {
  name: 'Schedule_List_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Schedule_List_Page' });
  },
});

FlowRouter.route('/add-to-schedule', {
  name: 'Add_To_Schedule_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_To_Schedule_Page' });
  },
});

FlowRouter.route('/about', {
  name: 'About_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'About_Page' });
  },
});

FlowRouter.route('/pricing', {
  name: 'Pricing_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Pricing_Page' });
  },
});

FlowRouter.route('/contact', {
  name: 'Contact_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Contact_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};

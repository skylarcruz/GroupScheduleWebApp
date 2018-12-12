/* eslint-env mocha */

import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { Stuff } from '../../imports/api/stuff/stuff.js';

if (Meteor.isClient) {
  it('client is not server', function testClient() {
    assert.strictEqual(Meteor.isServer, false);
  });

  it('Router is defined', function testRouter() {
    assert.isDefined(FlowRouter, 'router has not been defined');
  });
}

if (Meteor.isServer) {
  it('server is not client', function testServer() {
    assert.strictEqual(Meteor.isClient, false);
  });

  describe('Database', () => {
    it('Collection is defined', function testStuff() {
      assert.isDefined(Stuff, 'Collection has not been defined');
    });

    it('Can add to the collection', function testAdd() {
      const stuffAdd = [
        { courseName: 'Test Course', courseNum: '1', roomNum: '2',
          startHour: '10', startMin: '00', endHour: '11', endMin: '00',
          monday: true, tuesday: true, wednesday: true, thursday: true, friday: true, calColor: '2' }];
      _.each(stuffAdd, function seedStuffs(stuff) {
        Stuff.insert(stuff);
      });
    });
  });
}

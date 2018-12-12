import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { Stuff } from '../../imports/api/stuff/stuff.js';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';

if(Meteor.isClient) {
  it ("client is not server", function testClient() {
    assert.strictEqual(Meteor.isServer, false);
  });
}

if(Meteor.isServer) {
  it ("server is not server", function testServer() {
    assert.strictEqual(Meteor.isClient, false);
  });

  it ("package.json has correct name", async function () {
    const { name } = await import("../../package.json");
    assert.strictEqual(name, "meteor-application-template");
  });

  it ("Schema is defined", function testStuff () {
  assert.isDefined(Stuff, 'schema has not been defined');
});

it ("Router is defined", function testRouter () {
  assert.isDefined(FlowRouter, 'router has not been defined');
});

it ("Template is defined", function testTemplate () {
  assert.isDefined(Template, 'router has not been defined');
});

}
 
describe('my module', function () {
  it('does something that should be tested', function () {
    // This code will be executed by the test driver when the app is started
    // in the correct mode
  })
})

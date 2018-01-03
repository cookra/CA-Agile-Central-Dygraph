describe('CustomApp', function () {
    it('should render the app', function () {
        var app = Rally.test.Harness.launchApp('CustomApp');
        expect(app.getEl()).toBeDefined();


        var callback = sinon.spy();
        PubSub.subscribe("message", callback);
        PubSub.publishSync("message");
        assertTrue(callback.called);
    });

    // Write app tests here!
    // Useful resources:
    // =================
    // Testing Apps Guide: https://help.rallydev.com/apps/2.1/doc/#!/guide/testing_apps
    // SDK2 Test Utilities: https://github.com/RallyApps/sdk2-test-utils

});
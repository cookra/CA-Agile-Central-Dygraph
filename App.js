Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',

    "test should call subscribers on publish": function () {
        var callback = sinon.spy();
        PubSub.subscribe("message", callback);

        PubSub.publishSync("message");

        assertTrue(callback.called);
    },

    launch: function () {
        var spy = sinon.spy(launch);
        console.log("Start !");
        var g = new Dygraph(

            // containing div
            document.getElementById("graphdiv"),

            // CSV or path to a CSV file.
            "Date,Temperature\n" +
            "2008-05-07,75\n" +
            "2008-05-08,70\n" +
            "2008-05-09,80\n"
        );
        console.log("Object " + g);
        //API Docs: https://help.rallydev.com/apps/2.1/doc/
    }
});
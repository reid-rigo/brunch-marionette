var app = new Backbone.Marionette.Application();
var IndexRouter = require('routes/index');

app.vent.on("foo", function(){
  alert("bar");
});

app.addRegions({
	header: "header",
	nav: "nav",
	content: "section#content",
	footer: "footer"
});

app.addInitializer(function(options) {
	this.router = new IndexRouter();
});


app.on("initialize:after", function(options) {
	Backbone.history.start({pushState: true});
});

module.exports = app;
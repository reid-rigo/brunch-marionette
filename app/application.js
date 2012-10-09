var app = new Backbone.Marionette.Application();
var Router = require('router');

app.router = new Router();

app.addRegions({
	header: "header",
	nav: "nav",
	content: "section#content",
	footer: "footer"
});

var HeaderView = require('views/header'),
		ContentView = require('views/content'),
		FooterView = require('views/footer');

app.addInitializer(function(options) {
	app.header.show(new HeaderView());
	app.content.show(new ContentView());
	app.footer.show(new FooterView());
});

app.on("initialize:after", function(options) {
	Backbone.history.start({pushState: true});
});

module.exports = app;
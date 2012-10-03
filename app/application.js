Backbone.Marionette.TemplateCache.prototype.loadTemplate = function(templateId, callback){

  // Marionette expects "templateId" to be the ID of a DOM element.
  // But with RequireJS, templateId is actually the full text of the template.
  var template = templateId;

  // Make sure we have a template before trying to compile it
  if (!template || template.length === 0){
      var msg = "Could not find template: '" + templateId + "'";
      var err = new Error(msg);
      err.name = "NoTemplateError";
      throw err;
  }

  template = this.compileTemplate(template);

  callback.call(this, template);
}

var app = new Backbone.Marionette.Application();
var IndexRouter = require('routes/index');
var Layout = require('layout');

app.vent.on("foo", function(){
  alert("bar");
});


app.addInitializer(function(options) {
	this.router = new IndexRouter();
	this.layout = new Layout();
	this.addRegions({});
});


app.on("initialize:after", function(options) {
	if (Backbone.history) {
		Backbone.history.start({pushState: true});
	}
});

module.exports = app;
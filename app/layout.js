module.exports = new Backbone.Marionette.Layout.extend({
  template: "layout",

  regions: {
    header: "header",
    footer: "footer"
  }
});
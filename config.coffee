exports.config =

  files:
    javascripts:
      joinTo:
        'js/app.js': /^app/
        'js/vendor.js': /^vendor/
        'test/javascripts/test.js': /^test/
      order:
        before: [
          'vendor/scripts/jquery-1.8.2.js',
          'vendor/scripts/underscore-1.4.1.js',
          'vendor/scripts/json2.js',
          'vendor/scripts/backbone-0.9.2.js',
          'vendor/scripts/backbone.marionette-0.10.2.js',
          'vendor/scripts/handlebars-1.0.rc.1.js'
        ]

    stylesheets:
      joinTo: 'css/app.css'
      order:
         before: ['vendor/styles/normalize.css']

    templates:
      joinTo: 'js/app.js'
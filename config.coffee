exports.config =

  files:
    javascripts:
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^vendor/
        'test/javascripts/test.js': /^test/
      order:
        before: [
          'vendor/scripts/jquery-1.8.2.js',
          'vendor/scripts/underscore-1.4.1.js',
          'vendor/scripts/json2.js',
          'vendor/scripts/backbone-0.9.2.js'
        ]

    stylesheets:
      joinTo: 'stylesheets/app.css'
      order:
         before: ['vendor/styles/normalize.css']

    templates:
      joinTo: 'javascripts/app.js'
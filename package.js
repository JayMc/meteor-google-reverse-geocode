Package.describe({
  name: 'jaymc:google-reverse-geocode',
  version: '0.0.3',
  summary: 'Calls Googles reverse geocode API converting GPS lat and lng to physical address',
  git: 'https://github.com/JayMc/meteor-google-reverse-geocode',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4.1');
  api.use([
    'http'
  ]);
  api.addFiles('google-reverse-geocode.js');
  api.export('reverseGeocode', 'client')
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jaymc:google-reverse-geocode');
  api.addFiles('google-reverse-geocode-tests.js');
});

Package.describe({
  name: 'eritikass:eveonlineapi',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Eve Online XML api for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/eritikass/meteor-eveonlinejs.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use(["underscore"], "server");
  api.add_files("eveonlineapi.js", "server");

  //api.use(["mongo", "fongandrew:find-and-modify"], "server");
  //api.add_files("eveonlineapi-mongocache.js", "server");

  // expose eve api in server side
  api.export('eveonlinejs', 'server');
});

Npm.depends({
  "eveonlinejs":  "2.0.0"
});

Package.onTest(function(api) {
  api.use(['tinytest', 'eritikass:eveonlineapi'], ['server']);
  api.addFiles('eveonlineapi-tests.js');
});

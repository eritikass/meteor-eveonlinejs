Package.describe({
    name: 'eritikass:eveonlineapi',
    version: '0.1.0',
    summary: 'Eve Online XML API for Meteor',
    git: 'https://github.com/eritikass/meteor-eveonlinejs.git',
    documentation: 'README.md'
})

Package.onUse(function (api) {
    api.versionsFrom('1.0')

    // core code wrapper from node.js module
    api.use("underscore", "server")
    api.add_files("eveonlineapi.js", "server")

    // custom meteor specific cache adapter
    api.imply('mongo', 'server')
    api.use("fongandrew:find-and-modify", "server")
    api.add_files("eveonlineapi-mongocache.js", "server")

    // expose eve api in server side
    api.export('eveonlinejs', 'server')
})

Npm.depends({
    "eveonlinejs": "2.0.0"
})

Package.onTest(function (api) {
    api.use(['tinytest', 'eritikass:eveonlineapi'], ['server'])
    api.addFiles('eveonlineapi-tests.js')
})

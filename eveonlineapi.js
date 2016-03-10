/**
 * @type {any}
 */
eveonlinejs = Npm.require('eveonlinejs')


// add Meteor.bindEnvironment around fetch function callback argument to avoid that longer api calls will break it
var fetchOrg = eveonlinejs.fetch
eveonlinejs.fetch = function () {
    // both 2'nd and 3'rd argument may be callback (as arguments are optional)
    // so better check all arguments and use bindEnvironment if they are function
    _.each(arguments, function (arg, index) {
        if (typeof arg == 'function') {
            arguments[index] = Meteor.bindEnvironment(arguments[index])
        }
    })
    return fetchOrg.apply(this, arguments)
}

// lets create aSync version from api fetch
eveonlinejs.fetchSync = Meteor.wrapAsync(eveonlinejs.fetch, eveonlinejs)

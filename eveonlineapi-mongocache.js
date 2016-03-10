var ApiCache = new Mongo.Collection('eveonlinejs_apicache')

/**
 * Cache in Meteor integrated MongoDB
 *
 * @exports MongoCache as eveonlinejs.cache.MongoCache
 * @constructor
 */
function MongoCache() {
}

MongoCache.prototype = Object.create(eveonlinejs.cache.Cache.prototype)

/**
 * Store value in cache.
 *
 * @param {String}   key      Cache key
 * @param {String}   value    Cache Value
 * @param {Number}   duration Number of seconds this cache entry will live
 * @param {Function} cb       Callback
 */
MongoCache.prototype.write = Meteor.bindEnvironment(function (key, value, duration, cb) {
    var expireTime = (new Date()).getTime() + duration

    ApiCache.findAndModify({
        query: {
            key: key
        },
        update: {
            value: value,
            key: key,
            expire: new Date(expireTime)
        },
        upsert: true,
        new: true
    })

    cb(null)
})

/**
 * Retrieve value from cache.
 *
 * @param  {String}   key Cache key
 * @param  {Function} cb  Callback
 * @return {String}       Cache value
 */
MongoCache.prototype.read = Meteor.bindEnvironment(function (key, cb) {
    var res = ApiCache.findOne({
        key: key,
        expire: {$gt: new Date()}
    })

    cb(null, res && res.value)
})


/**
 * cleanup old data from cache
 */
MongoCache.cleanup = function () {
    return ApiCache.remove({
        expire: {$lt: new Date()}
    })
}


// export
eveonlinejs.cache.MongoCache = MongoCache

// and set default
eveonlinejs.setCache(new eveonlinejs.cache.MongoCache())

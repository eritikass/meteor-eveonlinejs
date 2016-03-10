[Meteor](https://www.meteor.com/) version of [node.js](https://nodejs.org/) [eveonlinejs](https://www.npmjs.com/package/eveonlinejs) package.

Will add `eveonlinejs` object into the global scope, which you can then use [according to the documentation](https://github.com/MichaelErmer/eveonlinejs). 

Other than that is also surrounds `eveonlinejs.fetch` callback function with `Meteor.bindEnvironment` to avoid that longer api calls would break your program. 
There is also new `eveonlinejs.fetchSync` that will work in blocking mode.
```javascript
  try {
    var serverStatus = eveonlinejs.fetchSync('Server:ServerStatus')
    console.log('serverStatus', serverStatus)

    var charInfo = eveonlinejs.fetchSync('eve:CharacterID', {
      names: 'Baron Holbach'
    })
    console.log('charInfo', charInfo)
    
  } catch (e) {
    console.log('error', e)
  }
```

New [MongoDB](https://www.mongodb.org/) based [Caching](https://github.com/MichaelErmer/eveonlinejs#caching) adapter (`eveonlinejs.cache.MongoCache`) will be added and made default. It will create Mongo collection named `eveonlinejs_apicache` in your database. This new Cache adapter is helper method you can use to cleanup expired data from the cache collection.
```javascript
var removedEntrys = eveonlinejs.cache.MongoCache.cleanup()
console.log('eveonlinejs mongo cache cleanup done', removedEntrys)
```

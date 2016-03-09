[Meteor](https://www.meteor.com/) version of [node.js](https://nodejs.org/) [eveonlinejs](https://www.npmjs.com/package/eveonlinejs) package.


Will add `eveonlinejs` object into the global scope, which you can then use [according to the documentation](https://github.com/MichaelErmer/eveonlinejs). 

Other than that is also surrounds `eveonlinejs.fetch` callback function with `Meteor.bindEnvironment` to avoid that longer api calls would break your program. 
There is also new `eveonlinejs.fetchSync` that will work in blocking mode.
```javascript
  try {
    var res = eveonlinejs.fetchSync('Server:ServerStatus');
    console.log(res);
  } catch (e) {
    console.log('error', e);
  }
```

Todos:
* create custom Cache adapter for Meteor using Mongo

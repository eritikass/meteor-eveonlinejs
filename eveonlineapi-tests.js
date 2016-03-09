// make little test using eve apo CharacterID method for my char in eve
Tinytest.add('CharacterID api', function (test) {
  // both my char name and id can be used here as constants for testing purposes
  // and when i ask my id from CharacterID api giving my name - it have to match
  var charName = 'Baron Holbach';
  var charId = '241675010';

  eveonlinejs.setParams({
    names: charName,
  });
  var res = eveonlinejs.fetchSync('eve:CharacterID');

  test.equal(charName, res.characters[charId].name);

});

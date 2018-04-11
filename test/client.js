const test = require('tape');

test('Equals', (t) => {
  var expected = 'hello uk';
  var actual = filter('UK');
  t.equal(actual,expected, 'equals');
  t.end();
});



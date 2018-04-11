const test = require('tape');
const supertest = require('supertest');
const router = require('../src/router.js');

test('first test', (t) => {
supertest(router)
.post('/city')
.send('gaza')
.expect(200)
.expect('Content-Type' , 'application/json')
.end((err , res)=>{
  t.error(err);
  t.deepEqual(res.body.main,{
temp: 313.15,
pressure: 1006,
humidity: 20,
temp_min: 313.15,
temp_max: 313.15
}
,'equals');
t.end();
});
});

test('second test', (t) => {
supertest(router)
.post('/city')
.send('London')
.expect(200)
.expect('Content-Type' , 'application/json')
.end((err , res)=>{
  t.error(err);
  t.equal(res.body.weather[0].description,"mist",'equals');
t.end();
});
});

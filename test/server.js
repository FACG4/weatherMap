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
  t.deepEqual(res.body.measurment,{temp: 308.15, pressure: 1009, humidity: 28, temp_min: 308.15, temp_max: 308.15}
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
  t.equal(res.body.description,"drizzle rain",'equals');
t.end();
});
});

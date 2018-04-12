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
  t.equal(typeof(res.body),'object','equals 1');
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
  t.equal(typeof(res.body.weather[0].description),'string','equals 2');
t.end();
});
});

test('third test', (t) => {
supertest(router)
.post('/city')
.send('egypt')
.expect(200)
.expect('Content-Type' , 'application/json')
.end((err , res)=>{
  t.error(err);
  t.equal(typeof(res.body.main),'object','equals 3');
t.end();
});
});

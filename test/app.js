import expect from 'expect.js';
import 'babel-polyfill';

describe('test-fail',() =>{
  it('works',()=>{
    expect(1).to.equal(2);
  })
});
describe('test-sucess',() =>{
  it('works',()=>{
    expect(1).to.equal(1);
  })
})

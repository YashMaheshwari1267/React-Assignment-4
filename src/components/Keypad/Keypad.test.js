import React from 'react';
import {shallow, mount} from 'enzyme';
import Keypad from './Keypad';
describe('Testing the <Keypad /> component ',() => {
  
   test('button class should exist',()=>{
    const wrapper =  shallow(<Keypad />);
    expect(wrapper.find(".button").length).toBe(1);
  });

});
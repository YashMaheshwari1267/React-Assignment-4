import React from 'react';
import {shallow, mount} from 'enzyme';
import Result from './Result';
describe('Testing the <Result /> component ',() => {
  
   test('result class should exist',()=>{
    const wrapper =  shallow(<Result />);
    expect(wrapper.find(".result").length).toBe(1);
  });

  
});
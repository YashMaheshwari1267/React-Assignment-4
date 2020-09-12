import React, { Component } from 'react';
import {shallow, mount} from 'enzyme';
import App from './App';

describe('Testing the main class ',() => {
  
   test('main class should exist',()=>{
    const wrapper =  shallow(<App />);
    expect(wrapper.find(".App").length).toBe(1);
  });

  test('<h1> tag contains heading of app',() => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("h1").text()).toBe("Simple Calculator App");
  });
  
});
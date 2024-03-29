import React from 'react';
import {shallow} from 'enzyme';
import Display from './Display';

describe('Display', () => {
  beforeEach(() => wrapper = shallow(<Display />));

  it('should render a <div />', () => {
    expect(wrapper.find('div'). length).toEqual(1);
  });
})

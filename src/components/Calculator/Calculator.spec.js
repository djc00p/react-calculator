import React from 'react';
import { shallow } from 'enzyme';
import Calculator from './Calculator';

describe('Calculator', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Calculator />));

  it('should rendera <div />', () => {
    expect(wrapper.find('div').legnth).tpEqual(1);
  });
});

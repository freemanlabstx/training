import React from 'react';
import ReactDOM from 'react-dom';
import {spy} from 'sinon';
import { mount, shallow } from 'enzyme';

import NetworkedComponent from './index';

beforeEach(() => {
	global.fetch = jest.fn().mockImplementation(() => {
      var p = new Promise((resolve, reject) => {
        resolve({
          ok: true,
          string: 'hello from test',
          json: function() {
            return new Promise(resolve => resolve({ string: this.string }));
          }
        });
      });

      return p;
  });
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NetworkedComponent />, div);
});

it('has initial state set', () => {
  const wrapper = shallow(<NetworkedComponent />);
  expect(wrapper.state('loading')).toEqual(false);
  expect(wrapper.state('string')).toEqual('n/a');
});


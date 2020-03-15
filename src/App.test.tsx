import * as React from 'react';
import App from './App';
import { shallow, ShallowWrapper } from 'enzyme';

function app(): ShallowWrapper {
  return shallow(<App />);
}

describe('App', () => {
  let wrapper: ShallowWrapper, instance: App;

  beforeEach(() => {
    wrapper = app();
    instance = wrapper.instance() as App;
  });

  afterEach(() => {
    instance.socket.close();
  });

  it('renders the app correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

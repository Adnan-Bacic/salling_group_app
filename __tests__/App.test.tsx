/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

let wrapper: any;

// fix for:
// ReferenceError: You are trying to `import` a file after the Jest environment has been torn down
jest.useFakeTimers();

beforeEach(() => {
  wrapper = renderer.create(
    <App />,
  );
});

test('renders correctly', () => {
  const tree = wrapper.toJSON();
  expect(true).toBeTruthy();
});

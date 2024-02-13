/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

// Note: import explicitly to use the types shiped with jest.
import { it } from '@jest/globals';

let wrapper: any;

// fix for:
// ReferenceError: You are trying to `import` a file after the Jest environment has been torn down
jest.useFakeTimers();

beforeEach(() => {
  wrapper = renderer.create(
    <App />,
  );
});

it('renders correctly', () => {
  const tree = wrapper.toJSON();
  expect(tree).toMatchSnapshot();
});

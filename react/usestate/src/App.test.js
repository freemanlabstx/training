import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders a default count of 0', () => {
  render(<App />)
  const p = screen.getByText(/The count is/)
  expect(p).toHaveTextContent(0)
});

it('can click a button to increment the count', () => {
  render(<App />)
  const button = screen.getByRole("button")
  button.click()

  const p = screen.getByText(/The count is/)
  expect(p).toHaveTextContent(1)
});
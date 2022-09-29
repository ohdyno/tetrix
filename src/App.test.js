import { render, screen } from '@testing-library/react';
import App from './App';

test('renders an empty 1x1 board', () => {
  render(<App board={{rows: 1, columns: 1}}/>);
  const cells = screen.getAllByRole(/cell/i);
  expect(cells.length).toEqual(1);
});

test('renders an empty 3x3 board', () => {
  render(<App board={{rows: 3, columns: 3}}/>);
  const cells = screen.getAllByRole(/cell/i);
  expect(cells.length).toEqual(9);
});

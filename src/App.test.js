import { render, screen } from '@testing-library/react';
import App from './App';

test('renders an empty board with specified rows and columns', () => {
  render(<App board={{rows: 1, columns: 1}}/>);
  const rows = screen.getAllByTestId(/row/i);
  expect(rows.length).toEqual(1);
  const columns = screen.getAllByTestId(/column/i);
  expect(columns.length).toEqual(1);
});

// Unit tests that verify the component renders correctly and the button works as expected.
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

test('renders the counter', () => {
  render(<Counter />);
  const countElement = screen.getByText('Count: 0');
  expect(countElement).toBeInTheDocument();
});

test('increments the counter', () => {
  render(<Counter />);
  const buttonElement = screen.getByText('Increment');
  fireEvent.click(buttonElement);
  const countElement = screen.getByText('Count: 1');
  expect(countElement).toBeInTheDocument();
});
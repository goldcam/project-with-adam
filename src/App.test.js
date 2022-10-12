import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const textElem = screen.getByText(/Hello world/i);
  expect(textElem).toBeInTheDocument();
});

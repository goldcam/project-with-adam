import { render, screen } from '@testing-library/react';
import GitLinks from './GitLinks';

test('renders GitLinks', () => {
  render(<GitLinks />);
  const documentationLink = screen.getByText(/Documentation/i),
        videosLink = screen.getByText(/Videos/i),
        commandsLink = screen.getByText(/Git commands/i),
        downloadLink = screen.getByText(/Git commands/i);

  expect(documentationLink).toBeInTheDocument();
  expect(videosLink).toBeInTheDocument();
  expect(commandsLink).toBeInTheDocument();
  expect(downloadLink).toBeInTheDocument();
});

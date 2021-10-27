<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> d7104a8e07b4c4e976e20bb35c0680190f5b891d
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

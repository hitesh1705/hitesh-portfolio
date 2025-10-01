import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main heading with name', () => {
render(<App />);
const heading = screen.getByText(/Hitesh Yarlagadda/i);
expect(heading).toBeInTheDocument();
});
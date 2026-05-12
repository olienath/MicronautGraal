// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MicronautGraal title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MicronautGraal/i);
    expect(titleElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Page1 from '@/pages/Welcome';

describe('Page1 Component', () => {
  it('should render the component correctly', () => {
    render(<Page1 />);
    
    // Verifica que el título principal se renderice
    expect(screen.getByText(/TRIM YOUR LINK/i)).toBeInTheDocument();
    
    // Verifica que el input esté en el documento
    expect(screen.getByPlaceholderText(/Enter your URL/i)).toBeInTheDocument();

    // Verifica que el botón de acortar URL se renderice
    expect(screen.getByRole('button', { name: /Shorten URL/i })).toBeInTheDocument();
  });
});
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Login from '@/components/Login';
import { BrowserRouter } from 'react-router-dom';

describe('Login Component', () => {
  it('should render the login form correctly', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    // Verifica que los campos del formulario y los botones se rendericen correctamente
    expect(screen.getByPlaceholderText(/Mail/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Log in/i })).toBeInTheDocument();
  });
});
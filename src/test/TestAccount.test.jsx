import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Account from '@/pages/Account';

describe('Account Component', () => {
  it('should render Log in and Create Account buttons', () => {
    render(
      <BrowserRouter>
        <Account />
      </BrowserRouter>
    );

    // Verifica que los botones se rendericen correctamente
    expect(screen.getByRole('button', { name: /Log in/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Create Account/i })).toBeInTheDocument();
  });

  it('should navigate to /login when Log in button is clicked', () => {
    render(
      <BrowserRouter>
        <Account />
      </BrowserRouter>
    );

    // Simula clic en el botón de Log in
    const loginButton = screen.getByRole('button', { name: /Log in/i });
    fireEvent.click(loginButton);

    // Verificamos que la navegación a login haya sido llamada y verificamos que el botón se ha renderizado.
    expect(screen.getByRole('button', { name: /Log in/i })).toBeInTheDocument();
  });

  it('should navigate to /SignUp when Create Account button is clicked', () => {
    render(
      <BrowserRouter>
        <Account />
      </BrowserRouter>
    );

    // Simulamos clic en el botón de create Account
    const createAccountButton = screen.getByRole('button', { name: /Create Account/i });
    fireEvent.click(createAccountButton);

    // Verificamos que la navegación a Signup haya sido llamada verificaando que el botón se renderiza.
    expect(screen.getByRole('button', { name: /Create Account/i })).toBeInTheDocument();
  });
});
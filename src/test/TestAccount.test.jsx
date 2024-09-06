import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import EditProfile from '@/components/ComponentsAccounts/EditProfile'; // Ajusta la ruta según tu estructura de carpetas
import { describe, it, expect, vi } from 'vitest';

describe('EditProfile Component', () => {
    it('renders the Edit Profile heading', () => {
        render(
            <MemoryRouter>
                <EditProfile />
            </MemoryRouter>
        );
        const headingElement = screen.getByText(/Edit Profile/i);
        expect(headingElement).toBeInTheDocument();
    });

    it('renders the default username, email, and password', () => {
        render(
            <MemoryRouter>
                <EditProfile />
            </MemoryRouter>
        );
        const usernameInput = screen.getByDisplayValue(/Aqua_KH/i);
        const emailInput = screen.getByDisplayValue(/aqua.kh@gmail.com/i);
        const passwordInput = screen.getByDisplayValue(/**********/i);

        expect(usernameInput).toBeInTheDocument();
        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
    });

    it('changes avatar when an avatar option is clicked', () => {
        render(
            <MemoryRouter>
                <EditProfile />
            </MemoryRouter>
        );

        const avatarOptions = screen.getAllByRole('img');
        fireEvent.click(avatarOptions[1]); // Simula hacer clic en la segunda opción de avatar

        const selectedAvatar = screen.getByAltText(/Selected Avatar/i);
        expect(selectedAvatar.src).toContain('/images/account2.png'); // Verifica que el avatar seleccionado cambió
    });

   
});
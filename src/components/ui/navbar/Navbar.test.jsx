import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Navbar from './Navbar'; 

describe('Navbar', () => {
    it('renders all navigation links', () => {
        render(
            <BrowserRouter>
                <Navbar/>
            </BrowserRouter>
                
        );

        expect(screen.getByLabelText(/Home/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Account/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Inspireme/i)).toBeInTheDocument();
    });

    it('displays the correct text for each link', () => {
        render(
            <BrowserRouter>
                <Navbar/>
            </BrowserRouter>
            
        );

        expect(screen.getByText(/Home/i)).toBeInTheDocument();
        expect(screen.getByText(/Account/i)).toBeInTheDocument();
        expect(screen.getByText(/Inspireme/i)).toBeInTheDocument();
    });

    it('applies the correct styles when a link is active', () => {
        render(
            <BrowserRouter>
                <Navbar/>
            </BrowserRouter>
            
        );

        const homeLink = screen.getByLabelText(/Home/i);
        expect(homeLink).toHaveClass('text-primary-foreground');
    });
});

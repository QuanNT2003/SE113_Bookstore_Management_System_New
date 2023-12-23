import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../Login/index'; // Adjust the path to your Login component
const mockLoginApi = jest.fn();
describe('Login Component Tests', () => {
    
    // Test successful login
    test('login successful', () => {
        // Mock your API call here
        // ...
        mockLoginApi.mockResolvedValueOnce({ success: true });
        const emailInput = screen.getByPlaceholderText('Số điện thoại hoặc email');
        const passwordInput = screen.getByPlaceholderText('Mật khẩu');
        const loginButton = screen.getByRole('button', { name: 'ĐĂNG NHẬP' });

        fireEvent.change(emailInput, { target: { value: 'validemail@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'correctPassword' } });
        fireEvent.click(loginButton);

        // Check for successful login indication (e.g., redirection, success message)
        // ...
    });
    // Test wrong password
    test('wrong password', () => {
        // Mock your API call here
        // ...

        const passwordInput = screen.getByPlaceholderText('Mật khẩu');
        const loginButton = screen.getByRole('button', { name: 'ĐĂNG NHẬP' });

        fireEvent.change(passwordInput, { target: { value: 'wrongPassword' } });
        fireEvent.click(loginButton);

        // Check for error message or failed login indication
        // ...
    });
    test('renders Login component', () => {
        render(<Login />);
        expect(screen.getByText('Đăng nhập vào cửa hàng của bạn')).toBeInTheDocument();
    });

    test('has input for phone number or email', () => {
        render(<Login />);
        expect(screen.getByPlaceholderText('Số điện thoại hoặc email')).toBeInTheDocument();
    });

    test('has input for password', () => {
        render(<Login />);
        expect(screen.getByPlaceholderText('Mật khẩu')).toBeInTheDocument();
    });

    test('has a login button', () => {
        render(<Login />);
        expect(screen.getByRole('button', { name: 'ĐĂNG NHẬP' })).toBeInTheDocument();
    });

    test('has a link for forgotten password', () => {
        render(<Login />);
        expect(screen.getByText('Quên mật khẩu')).toBeInTheDocument();
    });
});

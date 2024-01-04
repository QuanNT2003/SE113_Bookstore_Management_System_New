import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './index'; // Adjust the path to your Login component
describe('Login Component Tests', () => {

    // test('login successful with correct credentials', async () => {
    //     render(<Login />);
    //     fireEvent.change(screen.getByPlaceholderText('Số điện thoại hoặc email'), { target: { value: 'correct@email.com' } });
    //     fireEvent.change(screen.getByPlaceholderText('Mật khẩu'), { target: { value: 'correctPassword' } });
    //     fireEvent.click(screen.getByRole('button', { name: 'ĐĂNG NHẬP' }));

    //     // Assert successful login behavior here (e.g., redirecting, displaying a success message)
    // });

    // test('shows error on wrong password', async () => {
    //     render(<Login />);
    //     fireEvent.change(screen.getByPlaceholderText('Số điện thoại hoặc email'), { target: { value: 'user@email.com' } });
    //     fireEvent.change(screen.getByPlaceholderText('Mật khẩu'), { target: { value: 'wrongPassword' } });
    //     fireEvent.click(screen.getByRole('button', { name: 'ĐĂNG NHẬP' }));

    //     // Assert error behavior here (e.g., displaying an error message)
    // });

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
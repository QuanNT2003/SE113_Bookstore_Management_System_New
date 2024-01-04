import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../Login/index'; 
describe('Login Component Tests', () => {

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
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../Login/index'; // Điều chỉnh đường dẫn đến component Login của bạn

describe('Login Component Tests', () => {
    
    test('renders Login component', () => {
        render(React.createElement(Login));
        expect(screen.getByText('Đăng nhập vào cửa hàng của bạn')).toBeInTheDocument();
    });

    test('has input for phone number or email', () => {
        render(React.createElement(Login));
        expect(screen.getByPlaceholderText('Số điện thoại hoặc email')).toBeInTheDocument();
    });

    test('has input for password', () => {
        render(React.createElement(Login));
        expect(screen.getByPlaceholderText('Mật khẩu')).toBeInTheDocument();
    });

    test('has a login button', () => {
        render(React.createElement(Login));
        expect(screen.getByRole('button', { name: 'ĐĂNG NHẬP' })).toBeInTheDocument();
    });

    test('has a link for forgotten password', () => {
        render(React.createElement(Login));
        expect(screen.getByText('Quên mật khẩu')).toBeInTheDocument();
    });
});

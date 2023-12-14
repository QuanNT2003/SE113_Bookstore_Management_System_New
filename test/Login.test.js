import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Login Component', () => {
    test('renders Login component', () => {
        render(<Login />);

        // Kiểm tra xem text "Đăng nhập vào cửa hàng của bạn" có xuất hiện không
        expect(screen.getByText('Đăng nhập vào cửa hàng của bạn')).toBeInTheDocument();

        // Kiểm tra xem input cho email hoặc số điện thoại có tồn tại không
        expect(screen.getByPlaceholderText('Số điện thoại hoặc email')).toBeInTheDocument();

        // Kiểm tra xem input mật khẩu có tồn tại không
        expect(screen.getByPlaceholderText('Mật khẩu')).toBeInTheDocument();
    });

    test('allows the user to enter login details', () => {
        render(<Login />);

        // Mô phỏng nhập liệu vào trường email/số điện thoại
        fireEvent.change(screen.getByPlaceholderText('Số điện thoại hoặc email'), {
            target: { value: 'test@example.com' },
        });

        // Mô phỏng nhập liệu vào trường mật khẩu
        fireEvent.change(screen.getByPlaceholderText('Mật khẩu'), {
            target: { value: 'password123' },
        });

        // Kiểm tra xem giá trị nhập vào có đúng không
        expect(screen.getByPlaceholderText('Số điện thoại hoặc email').value).toBe('test@example.com');
        expect(screen.getByPlaceholderText('Mật khẩu').value).toBe('password123');
    });

    // Thêm các kiểm thử khác nếu cần
});

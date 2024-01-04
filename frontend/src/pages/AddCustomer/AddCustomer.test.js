import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AddCustomer from './index';
import { ToastContext } from '~/components/ToastContext';

// Mock ToastContext
const mockToastContext = {
  notify: jest.fn(),
};

// Mock useNavigate
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useNavigate: () => mockNavigate, // mock for your hook
}));

describe('AddCustomer', () => {
  test('renders and can submit form', () => {
    render(
      <MemoryRouter>
        <ToastContext.Provider value={mockToastContext}>
          <AddCustomer />
        </ToastContext.Provider>
      </MemoryRouter>
    );

    // Fill out the form
    fireEvent.change(screen.getByTitle('Tên khách hàng'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByTitle('Địa chỉ'), { target: { value: '123 Main St' } });
    fireEvent.change(screen.getByTitle('Số điện thoại'), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByTitle('Email'), { target: { value: 'john@example.com' } });

    // Submit the form
    fireEvent.click(screen.getByText('Lưu'));

    // Check if the notify function was called
    expect(mockToastContext.notify).toHaveBeenCalledWith('success', 'Thêm khách hàng thành công');

    // Check if navigation was called
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});

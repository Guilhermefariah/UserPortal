import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';

describe('Form', () => {
  it('renders the submit button', () => {
    render(<Form />);
    const submitButton = screen.getByRole('button', { name: /enviar/i });
    expect(submitButton).toBeInTheDocument();
  });

  it('submits the form with name', () => {
    render(<Form />);
    const nameInput = screen.getByLabelText(/nome/i);
    const submitButton = screen.getByRole('button', { name: /enviar/i });

    fireEvent.change(nameInput, { target: { value: 'Guilherme' } });
    fireEvent.click(submitButton);

    expect(window.alert).toHaveBeenCalledWith('Formulário enviado: Guilherme');
  });
});

beforeEach(() => {
  jest.spyOn(window, 'alert').mockImplementation(() => {});
});

afterEach(() => {
  jest.restoreAllMocks();
});

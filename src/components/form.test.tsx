import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from './Form';

test('submits the form with the correct name', () => {
  window.alert = jest.fn();

  const { getByLabelText, getByText } = render(<Form />);
  
  const nameInput = getByLabelText(/nome/i);
  fireEvent.change(nameInput, { target: { value: 'Test Name' } });

  const submitButton = getByText(/enviar/i);
  fireEvent.click(submitButton);

  expect(window.alert).toHaveBeenCalledWith('Formulário enviado: Test Name');
});

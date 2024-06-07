import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./Form";

describe('Form', () => {
    it('renders the submit button', () => {
        render(<Form />);
        const submitButton = screen.getByRole('button', { name: /submit/i });
        expect(submitButton).toBeInTheDocument();
    });

    it('submit the form with name', () => {
        render(<Form />);
        const submitInput = screen.getByLabelText(/name/i);
        const submitButton = screen.getByRole('button', { name: /submit/i  });

        fireEvent.change(submitButton, { target: { value: 'Guilherme'} });
        fireEvent.click(submitInput);

        expect(window.alert).toHaveBeenCalledWith('Form submitted with name: Guilherme');
    });
});

beforeAll(() => {
    window.alert = jest.fn();
});

afterEach(() =>{
    jest.clearAllMocks();
});
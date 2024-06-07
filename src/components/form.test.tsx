import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./Form";

describe('Form', () => {
    it('renders the submit button', () => {
        render(<Form />);
        const submitButton = screen.getByRole('button', { name: /submit/i });
        expect(submitButton).toBeInTheDocument();
    })

    it('submit the form with name', () => {
        render(<Form />);
        const submitInput = screen.getByLabelText(/name/i);
    })
})
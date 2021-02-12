import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);
    const header = screen.getByText(/checkout form/i);
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);
    
    const firstName = screen.getByLabelText(/first/i);
    const lastName = screen.getByLabelText(/last/i);
    const address = screen.getByLabelText(/address/i);
    const city = screen.getByLabelText(/city/i);
    const state = screen.getByLabelText(/state/i);
    const zip = screen.getByLabelText(/zip/i);
    const button = screen.getByRole('button');

    userEvent.type(firstName, 'John-Jacob');
    userEvent.type(lastName, 'Jingleheimer');
    userEvent.type(address, '123 Main st');
    userEvent.type(city, 'Boston');
    userEvent.type(state, 'MA');
    userEvent.type(zip, '01845');
    userEvent.click(button);

    const success = screen.getByText(/Woo-hoo/i);
    expect(success).toBeInTheDocument();
});

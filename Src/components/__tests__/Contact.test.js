import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

it("should my contact commponent is renderd or not", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})

it("Should load button inside contact component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
})

it("Should load submit button inside contact component", () => {
    render(<Contact />);
    const submit = screen.getByText("Submit");
    expect(submit).toBeInTheDocument();
})

it("Should load placeholder inside contact component", () => {
    render(<Contact />);
    const placeholder = screen.getByPlaceholderText("Name");
    expect(placeholder).toBeInTheDocument();
})

it("Should load inputbox inside contact component", () => {
    render(<Contact />);
    const inputbox = screen.getAllByRole("textbox");
    expect(inputbox.length).toBe(2);
})


 




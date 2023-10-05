import { fireEvent, render,screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import reduxStore from "../../utils/reduxStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("Should render header component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={reduxStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole("button")
    expect(loginButton).toBeInTheDocument();
});


it("Should change login button to logout", () => {
    render(
        <BrowserRouter>
            <Provider store={reduxStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", {name: "Login"})
    fireEvent.click(loginButton);
    const logOutButton = screen.getByRole("button", {name: "Logout"})
    expect(logOutButton).toBeInTheDocument();
});
import { render,screen } from "@testing-library/react";
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
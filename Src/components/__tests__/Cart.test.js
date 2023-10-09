import { BrowserRouter } from "react-router-dom";
import RestureantMenu from "../RestureantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { act } from "react-dom/test-utils";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import reduxStore from "../../utils/reduxStore";
import "@testing-library/jest-dom";
import Header from "../Header";
import MyCart from "../MyCart"

global.fetch = jest.fn(() =>  Promise.resolve({
        json:() => Promise.resolve(MOCK_DATA)
    })
)

it("Should render the resturent menu component", async () => {
    await act(async () => render(
        <BrowserRouter>
        <Provider store={reduxStore}>
            <Header/>
            <MyCart/>
            <RestureantMenu />
        </Provider>
        </BrowserRouter>
    ));

    const accordianHeader = screen.getByText("Soups (4)")
    fireEvent.click(accordianHeader)

    const fooditems = screen.getAllByTestId("foodItems")
    expect(fooditems.length).toBe(4);



    
    const addBtns = screen.getAllByRole("button", {name: "ADD+"})
    fireEvent.click(addBtns[0]);
    
    const cardItems = screen.getByText("My Cart (1 Items)")
    expect(cardItems).toBeInTheDocument()
    
    
    fireEvent.click(addBtns[1]);
    const cardItems2 = screen.getByText("My Cart (2 Items)")
    expect(cardItems2).toBeInTheDocument()

    const reCheck = screen.getAllByTestId("foodItems")
    expect(reCheck.length).toBe(6)

    const clearCart = screen.getByText("Cart is empty, Shop Now")
    expect(clearCart).toBeInTheDocument()







})
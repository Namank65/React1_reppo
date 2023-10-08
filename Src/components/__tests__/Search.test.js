import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResList.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should search reslist for New text input", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ))

    const beforeSearch = screen.getAllByTestId("resCard")
    expect(beforeSearch.length).toBe(9)

    const searchBtn = screen.getByRole("button", {name: "Search"});

    const searchInput = screen.getByTestId("searchInput")

    fireEvent.change(searchInput, {target: {value:"New"}})
    fireEvent.click(searchBtn);

    const afterSearch = screen.getAllByTestId("resCard")
    expect(afterSearch.length).toBe(1)
});

it("Should filter top rated resturents", async () => {
    await act(async () => render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>
    ));

    const searchFilter = screen.getAllByTestId("resCard")
    expect(searchFilter.length).toBe(9)

    const topRatedBtn = screen.getByRole("button", {name:"Top Rated restaurants"})
    fireEvent.click(topRatedBtn)

    const cardAfterFilter = screen.getAllByTestId("resCard")
    expect(cardAfterFilter.length).toBe(5)

})
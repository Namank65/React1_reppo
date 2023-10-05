import {render, screen} from "@testing-library/react";
import ResCards from "../ResCards";
import {withIsOpenLable} from "../ResCards"
import MOCK_DATA from "../mocks/ResCardMock";
import "@testing-library/jest-dom";

it("Should render ResCard component with prop data", () => {
    render(<ResCards resData={MOCK_DATA}/>)
    const name = screen.getByText("Oven Story Pizza - Standout Toppings");
    expect(name).toBeInTheDocument()
})
it("Should render ResCard component with prop data", () => {
    render(withIsOpenLable())
    const name = screen.getByText("Oven Story Pizza - Standout Toppings");
    expect(name).toBeInTheDocument()
})
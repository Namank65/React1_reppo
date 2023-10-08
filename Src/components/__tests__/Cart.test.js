import { BrowserRouter } from "react-router-dom";
import RestureantMenu from "../RestureantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { act } from "react-dom/test-utils";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import reduxStore from "../../utils/reduxStore";

global.fetch = jest.fn(() =>  Promise.resolve({
        json:() => Promise.resolve(MOCK_DATA)
    })
)

it("Should render the resturent menu component", async () => {
    await act(async () => render(
        <BrowserRouter>
        <Provider store={reduxStore}>
            <RestureantMenu />
        </Provider>
        </BrowserRouter>
    ));

})
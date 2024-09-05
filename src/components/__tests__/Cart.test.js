import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA_NAME from "../mocks/ResMenuListMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA_NAME);
    },
  });
});

test("Should render Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Items at 139 (47)");

  fireEvent.click(accordianHeader);

  const clickingOnAccordianHeader = screen.getAllByTestId("foodItems");

  expect(clickingOnAccordianHeader.length).toBe(47);

  expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "ADD +" });

  //By clicking first add Button
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();
  // by clickingh second add button
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();
  // after adding two items to cart
  expect(screen.getAllByTestId("foodItems").length).toBe(49);

  // Now click on Clear Cart Button

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(screen.getAllByTestId("foodItems").length).toBe(47);

  expect(
    screen.getByText("Cart is Empty. Add some Items to the cart!!🛒")
  ).toBeInTheDocument();
});

import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/RestaurantCardMock.json";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Should load the data as a props", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Burger King");
  expect(name).toBeInTheDocument();
});

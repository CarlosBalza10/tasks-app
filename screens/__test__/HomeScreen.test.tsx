import React from "react";
import { render } from "@testing-library/react-native";
import HomeScreen from "../HomeScreen";

test("renders HomeScreen with navigation", () => {
  const mockNavigation = {
    navigate: jest.fn(),
  };

  const { getByText } = render(
    <HomeScreen navigation={mockNavigation as any} />
  );

  expect(getByText("Go to Tasks")).toBeTruthy();
  expect(getByText("Go to List")).toBeTruthy();
});

import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import ListScreen from "../ListScreen";

test("renders list screen correctly", async () => {
  const { getByText } = render(<ListScreen />);

  await waitFor(() => {
    expect(getByText("Element Name")).toBeTruthy();
  });
});

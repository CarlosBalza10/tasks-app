import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Provider } from "react-redux";
import store from "../../redux/store";
import TasksScreen from "../../screens/TasksScreen";

test("renders tasks screen correctly", () => {
  const { getByText, getByPlaceholderText } = render(
    <Provider store={store}>
      <TasksScreen />
    </Provider>
  );

  const addButton = getByText("Add New Task");
  fireEvent.press(addButton);

  const input = getByPlaceholderText("Task Description");
  const submitButton = getByText("Add Task");

  fireEvent.changeText(input, "New Task");
  fireEvent.press(submitButton);

  expect(getByText("New Task")).toBeTruthy();
});

import React, { useState } from "react";
import {
  View,
  Button,
  FlatList,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addTask } from "../redux/tasksSlice";
import { Task } from "../types";

const TasksScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [taskDescription, setTaskDescription] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const handleAddTask = () => {
    if (taskDescription.trim() === "") return;
    const newTask: Task = {
      id: Math.random().toString(),
      description: taskDescription,
    };
    dispatch(addTask(newTask));
    setTaskDescription("");
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.description}</Text>}
      />
      <Button title="Add New Task" onPress={() => setModalVisible(true)} />
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <TextInput
            placeholder="Task Description"
            value={taskDescription}
            onChangeText={setTaskDescription}
            style={styles.input}
          />
          <TouchableOpacity onPress={handleAddTask} style={styles.addButton}>
            <Text style={styles.addButtonText}>Add Task</Text>
          </TouchableOpacity>
          <Button title="Cancel" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  input: {
    width: 200,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#fff",
  },
  addButton: {
    backgroundColor: "blue",
    padding: 10,
  },
  addButtonText: {
    color: "#fff",
  },
});

export default TasksScreen;

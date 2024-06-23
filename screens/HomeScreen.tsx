import React from "react";
import { View, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Tasks"
        onPress={() => navigation.navigate("Tasks")}
      />
      <Button title="Go to List" onPress={() => navigation.navigate("List")} />
    </View>
  );
};

export default HomeScreen;

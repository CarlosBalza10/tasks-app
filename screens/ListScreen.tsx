import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

const ListScreen: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://6172cfe5110a740017222e2b.mockapi.io/elements")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>{item.name}</Text>
          {item.avatar && (
            <Image source={{ uri: item.avatar }} style={styles.image} />
          )}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
});

export default ListScreen;

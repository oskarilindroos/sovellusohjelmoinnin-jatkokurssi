import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { useState } from "react";
const LocationInput = ({ fetchWeatherData }) => {
  const [cityName, setCityName] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(input) => setCityName(input)}
        style={styles.input}
        placeholder="Enter city name"
      />
      <Button title="Fetch" onPress={() => fetchWeatherData(cityName)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 20,
    borderTopWidth: 1,
    borderTopColor: "#d4d4d4",
  },

  input: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 8,
    borderWidth: 1,
    minWidth: 200,
    borderColor: "#d4d4d4",
    backgroundColor: "#ececec",
  },
});

export default LocationInput;

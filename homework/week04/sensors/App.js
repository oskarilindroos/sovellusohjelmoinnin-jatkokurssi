import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Button,
} from "react-native";
import { useState, useEffect } from "react";
import { Accelerometer } from "expo-sensors";
import * as Location from "expo-location";

export default function App() {
  const [{ x, y, z }, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const [weatherData, setWeatherData] = useState(null);

  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  const [subscription, setSubscription] = useState(null);

  const _fast = () => Accelerometer.setUpdateInterval(16);

  const _subscribe = () => {
    setSubscription(Accelerometer.addListener(setData));
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  const fetchWeatherData = async (location) => {
    try {
      console.log(location);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${location.latitude}&lon=${location.longitude}&appid=${process.env.EXPO_PUBLIC_API_APPID}}`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  const buttonHandler = async () => {
    const location = await getLocation();
    await fetchWeatherData(location);
  };

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location.coords);

    return location.coords;
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: z >= 1 ? "red" : "white" }]}
    >
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={subscription ? _unsubscribe : _subscribe}
          style={styles.button}
        >
          <Text>{subscription ? "On" : "Off"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_fast} style={styles.button}>
          <Text>Fast</Text>
        </TouchableOpacity>
      </View>
      <Text>X: {x}</Text>
      <Text>Y: {y}</Text>
      <Text>Z: {z}</Text>
      <Button
        title="Get location"
        onPress={buttonHandler}
        style={styles.button}
      />
      <Text>Latitude: {location.latitude}</Text>
      <Text>Longitude: {location.longitude}</Text>
      {weatherData && (
        <>
          <Text>Weather in {weatherData.name}</Text>
          <Text>
            Weather: {weatherData.main.temp}C,{" "}
            {weatherData.weather[0].description}
          </Text>
          <Text>Humidity: {weatherData.main.humidity}%</Text>
        </>
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import WeatherInfo from "./components/WeatherInfo";
import LocationInput from "./components/LocationInput";

const App = () => {
  const [weatherData, setWeatherData] = useState({});

  const fetchWeatherData = async (cityName) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.EXPO_PUBLIC_API_APPID}}`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch weather data for Tampere on app start
  useEffect(() => {
    fetchWeatherData("Tampere");
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header weatherCityName={weatherData.name} />
      {weatherData.name && <WeatherInfo weatherData={weatherData} />}
      <LocationInput fetchWeatherData={fetchWeatherData} />
    </SafeAreaView>
  );
};

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 100,
    flexDirection: "column",
    borderLeftWidth: 1,
    borderLeftColor: "#d4d4d4",
    borderRightWidth: 1,
    borderRightColor: "#d4d4d4",
    marginLeft: windowWidth > 600 ? "auto" : 0,
    marginRight: windowWidth > 600 ? "auto" : 0,
    maxWidth: 600,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default App;

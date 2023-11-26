import { View, StyleSheet, Text, Image } from "react-native";

const WeatherInfo = ({ weatherData }) => {
  return (
    <>
      <View style={styles.weatherDegreesContainer}>
        <Text style={styles.temperatureText}>
          {weatherData.main.temp + "°C"}
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.weatherImageContainer}>
          <Image
            style={styles.weatherImage}
            source={{
              uri: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
            }}
          />
        </View>

        <View style={styles.weatherInformationContainer}>
          <Text>Description: {weatherData.weather[0].description}</Text>
          <Text>Wind speed: {weatherData.wind.speed + " m/s"}</Text>
          <Text>Humidity: {weatherData.main.humidity + " %"}</Text>
          <Text>Pressure: {weatherData.main.pressure + " hPa"}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 90,
    flexDirection: "row",
  },

  weatherImageContainer: {
    flex: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    borderRightColor: "#d4d4d4",
  },

  weatherImage: {
    width: 80,
    height: 80,
  },

  weatherDegreesContainer: {
    flex: 10,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#d4d4d4",
  },

  temperatureText: {
    fontSize: 24,
    fontFamily: "sans-serif",
  },

  weatherInformationContainer: {
    flex: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default WeatherInfo;

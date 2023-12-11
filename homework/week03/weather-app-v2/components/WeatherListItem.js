import { Text, View, Image, StyleSheet } from "react-native";

const WeatherListItem = ({ forecastData }) => {
    console.log(forecastData);
    return (
        <View style={styles.container}>
            <View style={styles.weatherImageContainer}>
                <Image
                    style={styles.weatherImage}
                    source={{
                        uri: `http://openweathermap.org/img/wn/${forecastData.item.weather[0].icon}@2x.png`,
                    }}
                />
                <Text>{forecastData.item.weather[0].description}</Text>
            </View>

            <View style={styles.weatherInformationContainer}>
                <Text>{forecastData.item.dt_txt}</Text>
                <Text>{forecastData.item.temp}C temperature</Text>
                <Text>{forecastData.item.wind_speed} m/s wind speed</Text>
                <Text>{forecastData.item.humidity}% humidity</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 95,
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

export default WeatherListItem;

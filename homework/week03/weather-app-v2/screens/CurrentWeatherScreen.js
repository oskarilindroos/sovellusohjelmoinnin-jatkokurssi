import {
    View,
    StyleSheet,
    Platform,
    StatusBar,
    Dimensions,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState, useEffect } from "react";

import Header from "../components/Header";
import WeatherInfo from "../components/WeatherInfo";
import LocationInput from "../components/LocationInput";
const weatherForecastData = [
    {
        dt: 1627308000,
        dt_text: "2023-12-11 12:00:00",
        temp: -14,
        feels_like: 287.77,
        pressure: 1016,
        humidity: 51,
        dew_point: 277.81,
        uvi: 0,
        clouds: 0,
        visibility: 10000,
        wind_speed: 1.07,
        wind_deg: 0,
        wind_gust: 1.3,
        weather: [
            {
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01d",
            },
        ],
        pop: 0,
    },
    {
        dt: 1627308000,
        dt_text: "2023-12-12 12:00:00",
        temp: -8,
        feels_like: 287.77,
        pressure: 1016,
        humidity: 51,
        dew_point: 277.81,
        uvi: 0,
        clouds: 0,
        visibility: 10000,
        wind_speed: 1.07,
        wind_deg: 0,
        wind_gust: 1.3,
        weather: [
            {
                id: 800,
                main: "Clear",
                description: "cloudy",
                icon: "02d",
            },
        ],
        pop: 0,
    },
    {
        dt: 1627308000,
        dt_text: "2023-12-13 12:00:00",
        temp: -10,
        feels_like: 287.77,
        pressure: 1016,
        humidity: 51,
        dew_point: 277.81,
        uvi: 0,
        clouds: 0,
        visibility: 10000,
        wind_speed: 1.07,
        wind_deg: 0,
        wind_gust: 1.3,
        weather: [
            {
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01d",
            },
        ],
        pop: 0,
    },
    {
        dt: 1627311600,
        dt_text: "2023-12-14 12:00:00",
        temp: -8,
        feels_like: 290.17,
        pressure: 1016,
        humidity: 42,
        dew_point: 276.24,
        uvi: 0.81,
        clouds: 0,
        visibility: 10000,
        wind_speed: 1.28,
        wind_deg: 0,
        wind_gust: 1.5,

        weather: [
            {
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01d",
            },
        ],
        pop: 0,
    },
    {
        dt: 1627315200,
        dt_text: "2023-12-15 12:00:00",
        temp: -9,
        feels_like: 292.58,
        pressure: 1016,
        humidity: 36,
        dew_point: 275.13,
        uvi: 2.02,
        clouds: 0,
        visibility: 10000,
        wind_speed: 1.43,
        wind_deg: 0,
        wind_gust: 1.65,

        weather: [
            {
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01d",
            },
        ],
    },
];

const CurrentWeatherScreen = () => {
    const [weatherData, setWeatherData] = useState({});
    const Tab = createBottomTabNavigator();

    const fetchWeatherData = async () => {
        try {
            setWeatherData(weatherForecastData);
        } catch (error) {
            console.error(error);
        }
    };

    // Fetch weather data for Tampere on app start
    useEffect(() => {
        fetchWeatherData();
    }, []);

    return (
        <View style={styles.container}>
            <Header weatherCityName={"Tampere"} />
            {weatherData.length > 0 && (
                <WeatherInfo weatherData={weatherData} />
            )}
        </View>
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
    },
});

export default CurrentWeatherScreen;

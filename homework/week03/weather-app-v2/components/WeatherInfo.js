import { View, StyleSheet, FlatList, Text, Image } from "react-native";
import WeatherListItem from "./WeatherListItem";

const WeatherInfo = ({ weatherData }) => {
    return (
        <FlatList
            data={weatherData}
            renderItem={(item) => <WeatherListItem forecastData={item} />}
        />
    );
};

export default WeatherInfo;

import { View, StyleSheet, Text } from "react-native";

const Header = ({ weatherCityName }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                {weatherCityName ?? "No city entered"}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#d4d4d4",
    },

    headerText: {
        fontSize: 24,
        fontFamily: "sans-serif",
    },
});

export default Header;

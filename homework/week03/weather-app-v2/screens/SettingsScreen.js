import {
    Text,
    Button,
    View,
    Linking,
    Platform,
    //   ToastAndroid,
} from "react-native";

const SettingsScreen = () => {
    const openMaps = () => {
        const scheme = Platform.select({
            ios: "maps:0,0?q=",
            android: "geo:0,0?q=",
        });
        const latLng = "60.1699,24.9384";
        const label = "Tampere";
        const url = Platform.select({
            ios: `${scheme}${label}@${latLng}`,
            android: `${scheme}${latLng}(${label})`,
        });
        Linking.openURL(url);
    };

    const openBrowser = () => {
        Linking.openURL("https://www.google.com");
    };

    const showToast = () => {
        ToastAndroid.show("This is a toast message", ToastAndroid.SHORT);
    };

    return (
        <View>
            <Text>SettingsScreen</Text>
            <Button title="Open Maps" onPress={openMaps} />
            <Button title="Open Browser" onPress={openBrowser} />
            <Button title="Show Toast" onPress={showToast} />
        </View>
    );
};
export default SettingsScreen;

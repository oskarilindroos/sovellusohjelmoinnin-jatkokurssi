import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import CurrentWeatherScreen from "./screens/CurrentWeatherScreen";
import SettingsScreen from "./screens/SettingsScreen";

const App = () => {
    const Tab = createBottomTabNavigator();
    // const Stack = createStackNavigator();
    // const Drawer = createDrawerNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={CurrentWeatherScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;

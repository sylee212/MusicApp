import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import ProfileScreen from "./screens/ProfileScreen";
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Tab = createBottomTabNavigator();

function BottomTabs(){
    return (
        <Tab.Navigator>
            <Tab.Screen
            name="Home"
            component={HomeScreen}
            options = {{
                tabBarLabel:  "Home",
                 headerShown: false, 
                 tabBarLabelStyle: {color: "white" },
                 tabBarIcon: ({focused}) => 
                 focused ? (
                    <Entypo name="home" size={24} color="black" />
                  ) : (
                    <AntDesign name="home" size={24} color="black" />
                  )
                
                }} 
            />
            <Tab.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options = {{
                tabBarLabel:  "Profile",
                 headerShown: false, 
                 tabBarLabelStyle: {color: "white" },
                 tabBarIcon: ({focused}) => 
                 focused ? (
                    <Ionicons name="person" size={24} color="black" />
                  ) : (
                    <Ionicons name="person-outline" size={24} color="black" />
                  )
                
                }} 
            />
        </Tab.Navigator>
    )
}

const Stack = createNativeStackNavigator();
function Navigation(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={BottomTabs} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;



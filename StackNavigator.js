import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import ProfileScreen from "./screens/ProfileScreen";
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";


const Tab = createBottomTabNavigator();

function BottomTabs(){
    return (
        // its a componenet that holds the tabs
        <Tab.Navigator>
            <Tab.Screen
            name="Home"
            component={HomeScreen}
            options = {{
                // this is the name below the icon
                tabBarLabel:  "Home",

                // hides the screen header?
                 headerShown: false, 

                 tabBarLabelStyle: {color: "white" },
                
                // the focused is auto provided by react navigation
                // why must have {}? cause it passes an object
                // { focused, color, size }.
                // so what we are doing is destructuring the object and finding tha parameter called focused
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

// stack navigator is a stack for screens
// means if you are on Page A and you go to Page B,
// stack = [Page A, Page B] pop from back 
const Stack = createNativeStackNavigator();
function Navigation(){
    return (
        // NavigationContainer is the main navigation system
        // Stack.Navigator is the stack where the screens are placed on top of each other
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} /> 
                <Stack.Screen name="Main" component={BottomTabs} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;



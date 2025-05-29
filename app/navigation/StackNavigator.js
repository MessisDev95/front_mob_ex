import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Index from '../screens/Index';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
//...."Em obras"....!!!!
const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="index">
                <Stack.Screen name="Index" component={Index} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
            </Stack.Navigator>    
        </NavigationContainer>    
    );
}

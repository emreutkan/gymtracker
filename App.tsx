
import { NavigationContainer } from '@react-navigation/native';
import {RegistrationScreen} from "./features/Register/RegisterScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {IntroductionScreen} from "./features/onboarding/IntroductionScreen";
import {LoginScreen} from "./features/Login/LoginScreen";
import {HomeScreen} from "./features/Home/HomeScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Introduction"
            screenOptions={{
              headerShown: false
            }}
        >
          <Stack.Screen name="Introduction" component={IntroductionScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />

        </Stack.Navigator>
      </NavigationContainer>
  );
}


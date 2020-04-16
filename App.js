import 'react-native-gesture-handler';
import React from 'react';
import Login from './screen/Login';
import Registro from './screen/Registrarse';
import Primera from './screen/Inicio';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import Datos from './screen/Datos';
//import Principal from './screen/Principal';

const Stack = createStackNavigator();

const App:() => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Primera">
        <Stack.Screen name="Inicio" component={Primera} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
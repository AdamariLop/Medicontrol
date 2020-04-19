import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';

import Login from './screens/Login';
import Registro from './screens/Registrarse';
import Primera from './screens/Inicio';
import Recetas from './screens/Recetas';
import Medicamentos from './screens/Medicamentos';
import Perfil from './screens/Perfil';
import Ayuda from './screens/Ayuda';
import { DrawerCustom } from './screens/DrawerCustom'
import Accionador from './screens/Accionador'
import Mydatepicker from './screens/Mydatepicker'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerRoutes() {
  return (
    <Drawer.Navigator initialRouteName="Mydatepicker" drawerContent={props => <DrawerCustom {...props} />} >
      <Drawer.Screen name="Mydatepicker" component={Mydatepicker} options={{ headerShown: false }} />
      <Drawer.Screen name="Accionador" component={Accionador} options={{ headerShown: false }} />
      <Drawer.Screen name="Recetas" component={Recetas} options={{ headerShown: false }} />
      <Drawer.Screen name="Perfil" component={Perfil} options={{ headerShown: false }} />
      <Drawer.Screen name="Medicamentos" component={Medicamentos} options={{ headerShown: false }} />
      <Drawer.Screen name="Ayuda" component={Ayuda} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Primera">
        <Stack.Screen name="Inicio" component={Primera} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Accionador" component={Accionador} options={{ headerShown: false }} />
        <Stack.Screen name="Mydatepicker" component={DrawerRoutes} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
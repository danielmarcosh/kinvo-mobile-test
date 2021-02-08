import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import Acoes from './pages/Acoes';
import Fundos from './pages/Fundos';
import Previdencia from './pages/Previdencias';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: '#6F4DBF',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'Montserrat',
            fontSize: 20,
          },
          headerStyle: {backgroundColor: '#FFFFFF', height: 100},
        }}>
        <Stack.Screen
          name="Home"
          component={Home}

          options={{title: 'Desafio'}}
        />
        <Stack.Screen
          name="Acoes"
          component={Acoes}
          options={{title: 'Acoes'}}
        />
        <Stack.Screen
          name="Fundos"
          component={Fundos}
          options={{title: 'Fundos'}}
        />
        <Stack.Screen
          name="Previdencia"
          component={Previdencia}
          options={{title: 'Previdencia'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

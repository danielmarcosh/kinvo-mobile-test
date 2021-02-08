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
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
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

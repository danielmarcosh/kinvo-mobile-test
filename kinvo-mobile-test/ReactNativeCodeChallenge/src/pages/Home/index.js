import * as React from 'react';
import {View, Text, Button} from 'react-native';

function Home({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Bem vindo!</Text>
      <Button
        title="Ir para acoes"
        onPress={() => navigation.navigate('Acoes')}
      />
      <Button
        title="Ir para fundos"
        onPress={() => navigation.navigate('Fundos')}
      />
      <Button
        title="Ir para Previdencia"
        onPress={() => navigation.navigate('Previdencia')}
      />
    </View>
  );
}

export default Home;

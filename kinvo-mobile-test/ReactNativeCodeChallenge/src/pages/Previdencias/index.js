import * as React from 'react';
import {View, Text, Button} from 'react-native';

function Previdencia({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Tela Previdencia</Text>
      <Button
        title="Ir para Previdencia"
        onPress={() => navigation.push('Previdencia')}
      />
    </View>
  );
}

export default Previdencia;

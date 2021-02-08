import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

function Home({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Acoes')}>
        <View style={styles.item}>
          <Text style={styles.title}>Ações</Text>
          <Text style={styles.description}>Status</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#ECF0F2',
    fontFamily: 'Montserrat',
  },
  item: {
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 20,
    marginVertical: 20,
    marginHorizontal: 20,
    height: 120,
    width: 365,
    backgroundColor: '#FFFFFF',
    borderColor: '#707070',
    borderWidth: 0.5,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    color: '#6F4DBF',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
    color: '#627179',
  },
});

export default Home;

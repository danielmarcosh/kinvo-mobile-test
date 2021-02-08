import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';

function Home({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Acoes')}>
        <View style={styles.item}>
          <Image
            style={styles.Image}
            source={require('./../../assets/acoes.png')}
          />
          <View style={styles.titleAndDescription}>
            <Text style={styles.title}>Ações</Text>
            <Text style={styles.description}>Nacionais</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Fundos')}>
        <View style={styles.item}>
          <Image
            style={styles.Image}
            source={require('./../../assets/fundos.png')}
          />
          <View style={styles.titleAndDescription}>
            <Text style={styles.title}>Fundos</Text>
            <Text style={styles.description}>De investimentos</Text>
          </View>
          <View style={{paddingLeft: 100, paddingTop: 15}}>
            <Image
              style={styles.Image}
              source={require('./../../assets/novo.png')}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Previdencia')}>
        <View style={styles.item}>
          <Image
            style={styles.Image}
            source={require('./../../assets/previdencia.png')}
          />
          <View style={styles.titleAndDescription}>
            <Text style={styles.title}>Previdências</Text>
            <Text style={styles.description}>Privadas</Text>
          </View>
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
    flexDirection: 'row',
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
  image: {
    height: 56,
    width: 56,
  },
  titleAndDescription: {
    paddingLeft: 12,
    paddingTop: 8,
  },
});

export default Home;

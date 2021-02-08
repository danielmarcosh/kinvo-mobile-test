import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Ações',
    description: 'Nacionais',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Fundos',
    description: 'De investimentos',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Previdências',
    description: 'Privadas',
  },
];

const Item = ({item, onPress, style}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.description}>{item.description}</Text>
  </TouchableOpacity>
);

function Home({navigation}) {
  const [selectedId] = useState(null);
  let route;

  if (selectedId === 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba') {
    route = 'Acoes';
  } else if (selectedId === '3ac68afc-c605-48d3-a4f8-fbd91aa97f63') {
    route = 'Fundos';
  } else if (selectedId === '58694a0f-3da1-471f-bd96-145571e29d72') {
    route = 'Previdencia';
  } else {
    route = 'Home';
  }
  console.log(route)
  const renderItem = ({item}) => {
    return (
      <Item
        item={item}
        onPress={() => navigation.navigate(route)}
        style={{backgroundColor: '#ECF0F2'}}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Home;

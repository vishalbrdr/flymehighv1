import React, {Suspense} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {useFetch} from './hooks/useFetch';

type Data = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

const App = () => {
  const {isLoading, data} = useFetch<Data[]>(
    'https://api.openweathermap.org/data/2.5/weather?lat=0&lon=0&appid=f425736747d567d4b635e65bef504761',
  );
  return (
    <View style={{flex: 1, padding: 20}}>
      <Text style={{fontSize: 24}}>Hello Welcome to my App</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id.toString()}
          renderItem={({item}) => <Text>{item.main}</Text>}
        />
      )}
    </View>
  );
};

export default App;

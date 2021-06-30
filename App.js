import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import ListItem from './components/ListItem.js'
import dummyarticles from './dummies/articles.json'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
      height: 100,
      width: '100%',
      borderColor: "gray",
      borderWidth: 1,
      flexDirection: "row"
  },
  leftContainer: {
      width:100,
  },
  rightContainer: {
      flex: 1,
      flexDirection: 'column',
      padding: 10,
      justifyContent: "space-between"
  },
  text: {
      fontSize: 16
  },
  subtext: {
      fontSize: 12,
      color: "gray"
  }
});

export default function App() {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const timer = setTimeout(() => {
            setArticles(dummyarticles)
        }, 2000);
        return() => clearTimeOut(timer); 
    }, []);
  return (
    <SafeAreaView style={styles.container}>
        <FlatList
            data={articles}
            renderItem={({item}) => (
                <ListItem
                    imageUrl = {item.urlToImage}
                    title = {item.title}
                    author = {item.author}
                    />
            )}
            keyExtractor={(item, index) => index.toString()}
        />
    </SafeAreaView>
  );
}

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
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

const ListItem = () => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.leftContainer}>
                <Image
                  style={{width:100, height: 100}}
                  source={{
                    uri: 'https://picsum.photos/id/10/200/200',
                  }}
                />
            </View>
            <View style={styles.rightContainer}>
                <Text numberOfLines={3} style={styles.text}>
                    ed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                </Text>
                <Text style={styles.subtext}>
                    ReactNative
                </Text>
            </View>
        </View>
    )
}

export default ListItem;
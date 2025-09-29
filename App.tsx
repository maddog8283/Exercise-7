import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Flexbox = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.tpContainer}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>

      <Image
        source={require('./images/logo-with-motto-3.png')}
        style={styles.img}
      />

      <View style={styles.btmContainer}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>
    </View>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tpContainer: {
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    width: '100%',
    columnGap: 10,
    
  },
  btmContainer: {
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    width: '100%',
  },
  blackBox: {
    backgroundColor: 'black',
    height: 70,
    width: 70,
  },
  yellowBox: {
    backgroundColor: 'yellow',
    height: 70,
    width: 70,
  },
  img: {
    height: 120,
    width: 300,
    resizeMode: 'contain',
    marginVertical: 20,
  },
});

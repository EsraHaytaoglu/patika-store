import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#dcdcdc',
    margin: 10,
    borderRadius: 10,
    width: Dimensions.get('window').width / 2.2,
  },
  img_container: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width / 2.5,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
  },
  image: {
    height: Dimensions.get('window').height / 6,
    width: Dimensions.get('window').width / 4,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
    color: 'black',
  },
  price: {
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#696969',
  },
  inner_container: {
    padding: 5,
  },
  inStock: {
    marginLeft: 10,
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

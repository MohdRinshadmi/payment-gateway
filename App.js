import React from "react";
import { View, StyleSheet, Image, Button, Text, Alert } from "react-native";
import RazorpayCheckout from 'react-native-razorpay';

function App() {

  const handlePayment = () => {
    var options = {
      name: 'In Makes',
      description: 'For test payment',
      currency: 'INR',
      amount: 50000,
      key: 'rzp_test_EPFelEqBaAykvp',
      prefill: {
        email: 'rr@gmail.com',
        contact: '799423338',
        name: 'Tester'
      },
      theme: {color: '#f34141'}
    }
    RazorpayCheckout.open(options).then((data) => {
      console.log('data', data)
Alert.alert('Successful')
    })
    .catch((error) => {
Alert.alert(`Error : ${error.code} | ${error.description}` )
    })
  }
  return (
    <View style={styles.container}>
      <Image style={styles.imageView}
        source={require('./assets/inmakes3.jpg')}>
      </Image>
      <Text style={styles.text1}>Inmakes</Text>
      <Text style={styles.text1}>Rs 500</Text>
      <View style={styles.button1}>
        <Button 
          title="Buy" 
          onPress={() => handlePayment()}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageView: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  text1: {
    fontSize: 25,
    color: '#000',
    bottom: 7,
    marginBottom: 10
  },
  button1: {
    width: 200
  }

})

export default App;
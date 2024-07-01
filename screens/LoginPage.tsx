import React, { useState } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, Alert} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import useFireBaseAuth from '../hooks/useAuthFB';


export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error}  = useFireBaseAuth();

  const handleLogIn = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Email and password are required')
      return;
    }

    await login(email, password)

    if (error) {
      if (typeof error === "string") {
        Alert.alert('error', error)
      } else {
        Alert.alert('Error', error.message)
      }
    } else{
      Alert.alert('Sign in', 'Loading...')
      navigation.navigate("HomePage")
    } 
  }
    return (
      <View style={styles.padre}>
        <Image source={require('../assets/profile.jpg')} style={styles.profile} />
        <View style={styles.tarjeta}>
          <View style={styles.boxText}>
            <TextInput
              placeholder='email@gmail.com'
              style={{ paddingHorizontal: 15 }}
              value={email}
              onChangeText={text =>setEmail(text)} />
          </View>
          <View style={styles.boxText}>
            <TextInput
              placeholder='Password'
              value={password}
              onChangeText={text =>setPassword(text) }
              style={{ paddingHorizontal: 15 }}
              secureTextEntry={true} />
          </View>
            <View style={styles.padreBtn}>
            <TouchableOpacity style={styles.boxBtn} onPress={handleLogIn}>
             <Text style={styles.TextBtn}>Sign In</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  padre: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },

  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: 'white'
  },
  tarjeta: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90 %',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  boxText: {
    paddingVertical: 20,
    backgroundColor: '#cccccc40',
    borderRadius: 30,
    marginVertical:10
  },
  padreBtn: {
    alignItems: 'center'
  },
  boxBtn: {
    backgroundColor: '#525FE1',
    borderRadius: 30,
    paddingVertical: 20,
    width: 150,
    marginTop: 20
  },
  TextBtn: {
    textAlign: 'center',
    color: 'white'
  }
});


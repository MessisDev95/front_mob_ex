import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";



   const Index = () => {

   return (
      <View style={styles.container}>
      <Text style={styles.title}>Bem Vindo!!</Text>
      <Image style={styles.image}
      source={require('../../assets/images/LogosLogoLema-Photoroom.png')}
      />
      
     <Text style={styles.label}>Acesso ao E-TICKET</Text>

      <TouchableOpacity style={styles.buttonFristScreen} onPress={() => navigation.navigate("Signup")}>
        <Text>CADASTRO</Text>
      </TouchableOpacity>

       <TouchableOpacity style={styles.buttonFristScreen} onPress={() => navigation.navigate("Login")}>
        <Text>LOGIN</Text>
      </TouchableOpacity>

      </View>
  
   );
  };
   


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor:'#063574',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 'flex-start',
    marginBottom: 70,
    justifyContent: 'flex-start',
    color: 'white',

  },
  label: {
    fontWeight: 'bold',
    justifyContent: 'center',
    fontSize: 18,
    color: 'white',
    padding: 8,
   },
  input: { 
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
    padding: 3,
    marginBottom: 7,
    width: '60%',
    justifyContent: 'center',
    backgroundColor: 'white',
    textAlign: 'center',
  
  },

  buttonFristScreen: {
   borderRadius:  3,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 7,
    width: '65%',
    backgroundColor: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    borderRadius:  30,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    paddingTop: 1,
    marginBottom: 7,
    width: '25%',//tamanho botao
    backgroundColor: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '45%',
    height: '20%',
    resizeMode: 'contain',
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 60,
    marginTop: 35,
  },
  botaoLogin: {
  padding: 1,
  flex: 1,
  paddingTop: '60%',
  color: 'white',
  textAlign: 'center',
  }
});

export default Index

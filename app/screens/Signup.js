import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


  const Signup = () => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [email, setEmail] = useState('');

   return (
      <View style={styles.container}>
      <Text style={styles.title}>Bem Vindo!!</Text>
      <Image style={styles.image}
        source={require('../../assets/images/LogosLogo-Photoroom.png')}
        />
      

      <Text style={styles.label}>Cadastro</Text>
      <TextInput 
      style={styles.input}
      placeholder="NOME"
      value={nome}
      onChangeText={text => setNome(text)}
      />
         
      <TextInput 
      style={styles.input}
      placeholder="CARGO"
      value={cargo}
      onChangeText={text => setCargo(text)}
      />         
      <TextInput 
      style={styles.input}
      placeholder="EMAIL"
      value={email}
      onChangeText={email => setEmail(email)}
      />

      <TouchableOpacity style={styles.button}>
        <Text>Enviar</Text>
      </TouchableOpacity>

       <TouchableOpacity style={styles.botaoLogin}>
              <Text>Já possuo cadastro.</Text>
            </TouchableOpacity>
      </View>
  
   );
   
}
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

  button: {
    borderRadius:  30,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 7,
    width: '25%',//tamanho botao
    backgroundColor: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  }
});
export default Signup
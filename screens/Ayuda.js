import React, { Component } from 'react';
import { Header, Left, Icon, Body, Right, Container, Text } from 'native-base';
import { Image, StyleSheet, Linking, View } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

export default class Principal extends Component {

  render() {
    const navegar = this.props.navigation;
    return (
      <Container>
        <Header style={{ backgroundColor: '#ffffff' }}>
          <Left>
            <Icon name='menu' type='Feather' style={{ marginTop: 12 }}
              onPress={() => navegar.dispatch(DrawerActions.openDrawer())} />
          </Left>
          <Body>
            <Image source={require('/ProyectosReact/Medicontrol/img/ayuda.png')}
              style={{ width: 225, height: 50, marginTop: 10 }} />
          </Body>
          <Right>
            <Icon name='user-circle-o' type='FontAwesome' onPress={() => navegar.navigate('Perfil')} />
          </Right>
        </Header>
        <Text style={styles.titulo}>VISUALIZAR MANUAL DE USO DE LA APLICACIÓN</Text>
        <Text style={styles.link}
          onPress={() => Linking.openURL('https://drive.google.com/file/d/1Vv3VuBkzypqH7Em-acx7RIVwJR3eGfcR/view?usp=sharing')}>
          manual_medicontrol.pdf
          </Text>
        <View style={{ marginTop: 50 }}>
          <Left style={{ marginRight: 200 }}>
            <Image source={require('/ProyectosReact/Medicontrol/img/imagen_contacto.png')}
              style={{ width: 150, height: 150 }} />
          </Left>
          <Right style={{ marginLeft: 150 }}>
            <Text style={styles.titulo}>CONTÁCTANOS</Text>
            <Text style={styles.texto2} >¿Preguntas?</Text>
            <Text style={styles.texto3} >¿Necesitas ayuda?</Text>
          </Right>
        </View>
        <View style={{ marginTop: 190 }}>
          <Text style={styles.titulo} >COMUNÍCATE CON NOSOTROS PARA MÁS INFORMACIÓN</Text>
        </View>
        <View>
          <Left style={{ marginRight: 270 }}>
            <Text style={styles.titulo2} >Correo:</Text>
          </Left>
          <Right style={{ marginLeft: 80 }}>
            <Text style={styles.texto4}>medicontrol.utsjr2020@gmail.com</Text>
          </Right>
        </View>
        <View style={{ marginTop: 50 }}>
          <Left style={{ marginRight: 230 }}>
            <Text style={styles.titulo2} >FACEBOOK:</Text>
          </Left>
          <Right style={{ marginLeft: 120 }}>
            <Text style={styles.texto4}>facebook.com/medicontrol</Text>
          </Right>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  titulo: {
    width: '100%', // OCUPAR EL ANCHO DE CARD
    fontSize: 25,
    fontFamily: 'sans-serif-condensed',
    fontWeight: 'bold',
    marginTop: 25,
    textAlign: 'center',
  },
  texto: {
    width: '100%', // OCUPAR EL ANCHO DE CARD
    fontSize: 15,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    marginTop: 15,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 15,
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
  texto2: {
    width: '100%', // OCUPAR EL ANCHO DE CARD
    fontSize: 15,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    marginTop: 15,
    marginRight: 30
  },
  texto3: {
    width: '100%', // OCUPAR EL ANCHO DE CARD
    fontSize: 15,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    marginTop: 15,
    marginRight: 5
  },
  texto4: {
    width: '100%', // OCUPAR EL ANCHO DE CARD
    fontSize: 12,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    marginTop: 33,
  },
  titulo2: {
    width: '100%', // OCUPAR EL ANCHO DE CARD
    fontSize: 20,
    fontFamily: 'sans-serif-condensed',
    fontWeight: 'bold',
    marginTop: 25,
    textAlign: 'center',
  },
});
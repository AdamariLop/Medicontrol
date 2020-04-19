import React, { Component } from 'react';
import { Header, Left, Icon, Body, Right, View, Container } from 'native-base';
import { Image, StyleSheet, Text } from 'react-native';
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
            <Image source={require('/ProyectosReact/Medicontrol/img/perfil.png')}
              style={{ width: 225, height: 50, marginTop: 10 }} />
          </Body>
          <Right>
            <Icon name='user-circle-o' type='FontAwesome' onPress={() => navegar.navigate('Perfil')} />
          </Right>
        </Header>
        <View style={{ alignItems: 'center', marginTop: 30 }}>
          <Image source={require('/ProyectosReact/Medicontrol/img/user.png')}
            style={{ width: 225, height: 225 }} />
        </View>
        <View>
          <Text style={styles.titulo} >USUARIO</Text>
          <Text style={styles.texto}>Ada</Text>
        </View>
        <View>
          <Text style={styles.titulo} >CORREO</Text>
          <Text style={styles.texto}>adamarilopez@gmail.com</Text>
        </View>
        <View>
          <Text style={styles.titulo} >PASSWORD</Text>
          <Text style={styles.texto}>****</Text>
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
    marginLeft: '5%'
  },
  texto: {
    width: '100%', // OCUPAR EL ANCHO DE CARD
    fontSize: 15,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: '5%'
  }
});
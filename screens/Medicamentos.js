import React, { Component } from 'react';
import { Header, Left, Button, Icon, Body, Right, Title, View } from 'native-base';
import { Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { DrawerActions } from '@react-navigation/native';

export default class Principal extends Component {

  render() {
    const navegar = this.props.navigation;
    return (

      <Header style={{ backgroundColor: '#ffffff' }}>
        <Left>
          <Icon name='menu' type='Feather' style={{ marginTop: 12 }}
            onPress={() => navegar.dispatch(DrawerActions.openDrawer())} />
        </Left>
        <Body>
          <Image source={require('/ProyectosReact/Medicontrol/img/medicamentos.png')}
            style={{ width: 225, height: 50, marginTop: 10 }} />
        </Body>
        <Right>
          <TouchableHighlight onPress={() => { }} >
            <View style={{ marginLeft: '10%' }}>
              <Icon name='user-circle-o' type='FontAwesome' />
            </View>
          </TouchableHighlight>
        </Right>
      </Header>
    );
  }
}
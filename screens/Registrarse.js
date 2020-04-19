import React, { Component } from 'react';
import { Container, Card, Content,  Body, Text, Button, Item, CardItem, Input, Icon} from 'native-base';
import { StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

class Registro extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render(){
    const navegar = this.props.navigation;
    return (
      <Container>
      <Content padder contentContainerStyle={styles.content}>
        <Card>
          <CardItem bordered>
            <Text style={styles.textCenter}>
              {this.props.route.params.titulo}
            </Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Item inlineLabel>
                <Icon type='FontAwesome' name='user' />
                  <Input placeholder='Nombre de usuario' onChangeText={(user)=> this.setState({user}) }/>
                </Item>
                <Item inlineLabel last>
                  <Icon type='FontAwesome' name='lock' />
                  <Input placeholder='Contraseña' secureTextEntry={true} onChangeText={(pass)=> this.setState({pass}) }/>
                </Item>
                <Item inlineLabel last>
                  <Icon type='Entypo' name='email' />
                  <Input placeholder='Correo' onChangeText={(correo)=> this.setState({correo}) }/>
                </Item>
            </Body>
          </CardItem>
          <CardItem footer bordered>
            <Button info style={styles.boton}
              onPress={() => {this.register() }}><Text style={{fontWeight: 'bold', fontFamily: 'sans-serif-condensed'}}> Registrarse </Text></Button>
          </CardItem>
        </Card>
      </Content>
    </Container>
      );
    }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center', // CENTRAR CONTENIDO
  },
  textCenter: {
    textAlign: 'center', // ALINEAR EL TEXTO
    width: '100%', // OCUPAR EL ANCHO DE CARD
    fontSize: 23,
    fontFamily: 'sans-serif-condensed',
    fontWeight: 'bold'
  },
  boton: {
    marginLeft: '25%' // AVENTAR DE LADO DERECHO
  },
  boton_red: {
    justifyContent: 'center',
    width: 165.7
  }
});


export default Registro;

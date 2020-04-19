import React, { Component } from 'react';
import { Container, Card, Content,  Body, Text, Button, Item, CardItem, Input, Icon, View } from 'native-base';
import { StyleSheet, Modal, ActivityIndicator, Alert } from 'react-native';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      user:'',
      pass:'',
      isloading:true
    }
  }

  ShowHideActivityIndicator = () =>{
    const navegar=this.props.navigation;
    if(this.state.isLoading == true)
    {
      this.setState({isLoading: false})
    }
    else
    {
      this.setState({isLoading: true})
      setTimeout(() => {
        navegar.navigate('Mydatepicker');
        this.setState({isLoading: false})
      },2000);
    }
  }
  
  render(){
    const navegar=this.props.navigation;
    return (
      <Container>
      <Content padder contentContainerStyle={styles.content}>
      {
        this.state.isLoading ?
        <Modal
          transparent = {true} 
          animationType = {'none'} 
          visible = {this.state.isloading}> 
          <View style = {styles.modalBackground}>
            <View style = {styles.activityIndicator}> 
              <ActivityIndicator style={{padding: 20}}/> 
            </View> 
          </View> 
        </Modal> : null
      }
        <Card>
          <CardItem bordered>
            <Text style={styles.textCenter}>Inicio de sesión</Text>
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
            </Body>
          </CardItem>
          <CardItem bordered>
            <Button info style={styles.boton} onPress={this.ShowHideActivityIndicator}>
              <Text style={{fontWeight: 'bold', fontFamily: 'sans-serif-condensed'}}> Entrar </Text></Button>
          </CardItem>
            <Button info style={{justifyContent:'center', marginLeft: '30%', width: 150}}
            onPress={() => navegar.navigate('Registro', { 
              titulo: 'Registro de usuario'
              }) }>
              <Text style={{fontWeight: 'bold', fontFamily: 'sans-serif-condensed'}}>Registrarse</Text></Button>
        </Card>
      </Content>
    </Container>
    ); //END RETURN
  } //END RENDER
}; //END CLASS*

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
    marginLeft: '36%', // AVENTAR DE LADO DERECHO
  },
  modalBackground : {
    flex : 1 ,
    alignItems : 'center' ,
    flexDirection : 'column' ,
    justifyContent : 'space-around' ,
    backgroundColor : '#ffffff'
  } ,
  activityIndicator : {
    backgroundColor : '#FFFFFF' ,
    height : 100 ,
    width : 100 ,
    borderRadius : 10 ,
    display : 'flex' ,
    alignItems : 'center' ,
    justifyContent : 'space-around'
  }
});


export default Login;
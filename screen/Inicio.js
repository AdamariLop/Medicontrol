import React, { Component } from 'react';
import { Container, Content, View, CardItem, Button, Text } from 'native-base';
import { StyleSheet, Modal, ActivityIndicator, Image } from 'react-native';

class Primera extends Component {
  state = { animating: true }
   
  closeActivityIndicator = () => setTimeout(() => {
    const navegar=this.props.navigation;
    navegar.navigate('Login'),
    this.setState({isLoading: false})
  },2000);
  
  componentDidMount = () => this.closeActivityIndicator()
  
  render(){
    const animating = this.state.animating
    return (
      <Container>
      <Content padder contentContainerStyle={styles.content}>
        <Image source={require('/ProyectosReact/Medicontrol/img/logo1.png')}
        style={{width: 100, height: 100}} />
        <ActivityIndicator
          animating = {animating}
          color = '#4b0082'
          size = "large"
          style = {styles.activityIndicator}/>
      </Content>
    </Container>
    ); //END RETURN
  } //END RENDER
}; //END CLASS*

export default Primera

const styles = StyleSheet.create ({
  content: {
    flex: 1,
    justifyContent: 'center', // CENTRAR CONTENIDO
    alignItems: 'center'
  },
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   activityIndicator: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 80
   }
})
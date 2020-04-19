import React, { Component } from 'react';
import { Header, Left, Icon, Body, Right, View, Container, Text } from 'native-base';
import { Image, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { DrawerActions } from '@react-navigation/native';

export default class Recetas extends Component {

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
                        <Image source={require('/ProyectosReact/Medicontrol/img/recetas.png')}
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
                <View>
                    <Text style={styles.titulo} >NOMBRE</Text>
                    <Text style={styles.texto}>Ada</Text>
                </View>
                <View>
                    <Text style={styles.titulo} >EDAD</Text>
                    <Text style={styles.texto}>20</Text>
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
        marginTop: 20,
        marginLeft: '5%'
    },
    texto: {
        width: '100%', // OCUPAR EL ANCHO DE CARD
        fontSize: 15,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: '5%'
    }
});
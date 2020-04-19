import React, { Component } from 'react';
import { Header, Left, Icon, Body, Right, View, Container, Text } from 'native-base';
import { Image, StyleSheet } from 'react-native';
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
                        <Icon name='user-circle-o' type='FontAwesome' onPress={() => navegar.navigate('Perfil')} />
                    </Right>
                </Header>
                <View>
                    <Text style={styles.titulo} >NOMBRE</Text>
                    <Text style={styles.texto}>Ada</Text>
                </View>
                <View>
                    <Left style={{ marginRight: 270 }}>
                        <Text style={styles.titulo} >EDAD</Text>
                        <Text style={styles.texto}>20</Text>
                    </Left>
                    <Right style={{ marginLeft: 220 }}>
                        <Text style={styles.titulo2} >SEXO</Text>
                        <Text style={styles.texto2}>F</Text>
                    </Right>
                </View>
                <View style={{marginTop: 100 }}>
                    <Text style={styles.titulo} >ALERGÍAS</Text>
                    <Text style={styles.texto}>Ninguna</Text>
                </View>
                <View>
                    <Left style={{ marginRight: 210 }}>
                        <Text style={styles.titulo} >ESTATURA</Text>
                        <Text style={styles.texto}>165</Text>
                    </Left>
                    <Right style={{ marginLeft: 220 }}>
                        <Text style={styles.titulo2} >PESO</Text>
                        <Text style={styles.texto2}>58</Text>
                    </Right>
                </View>
                <View style={{ flex: 1, marginTop: 100 }}>
                    <Text style={styles.titulo} >IMC</Text>
                    <Text style={styles.texto}>24</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.titulo} >DIAGNÓSTICO MÉDICO</Text>
                    <Text style={styles.texto}>Dolor de cabeza</Text>
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
    },
    titulo2: {
        width: '100%', // OCUPAR EL ANCHO DE CARD
        fontSize: 25,
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'bold',
        marginTop: 25,
    },
    texto2: {
        width: '100%', // OCUPAR EL ANCHO DE CARD
        fontSize: 15,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        marginTop: 15,
        marginRight: 50
    }
});
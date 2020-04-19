import React, { Component } from 'react';
import { Header, Left, Icon, Body, Right, Container, Card, CardItem, Text } from 'native-base';
import { Image, StyleSheet } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Principal extends Component {

    render() {
        const navegar = this.props.navigation;
        return (
            <Container>
                <ScrollView>
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
                            <Icon name='user-circle-o' type='FontAwesome' onPress={() => navegar.navigate('Perfil')} />
                        </Right>
                    </Header>
                    <Card>
                        <CardItem header>
                            <Text style={styles.titulo} >CAJÓN 1</Text>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text style={styles.subtitulo} >NOMBRE</Text>
                            </Left>
                            <Right>
                                <Text style={styles.texto}>Aspirina</Text>
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text style={styles.subtitulo} >DOSIS</Text>
                            </Left>
                            <Right>
                                <Text style={styles.texto}>1 pastilla</Text>
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text style={styles.subtitulo} >CADA</Text>
                            </Left>
                            <Right>
                                <Text style={styles.texto}>8 hrs</Text>
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text style={styles.subtitulo} >POR</Text>
                            </Left>
                            <Right>
                                <Text style={styles.texto}>7 dias</Text>
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text style={styles.subtitulo} >FECHA</Text>
                            </Left>
                            <Right>
                                <Text style={styles.texto}>07 de Abril de 2020</Text>
                            </Right>
                        </CardItem>
                    </Card>
                </ScrollView>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    subtitulo: {
        width: '100%', // OCUPAR EL ANCHO DE CARD
        fontSize: 25,
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'bold',
        marginLeft: '5%'
    },
    texto: {
        width: '100%', // OCUPAR EL ANCHO DE CARD
        fontSize: 15,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: '5%'
    },
    titulo: {
        width: '100%', // OCUPAR EL ANCHO DE CARD
        fontSize: 25,
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'bold',
        color: "#4682b4",
        marginLeft: 100
    },
});
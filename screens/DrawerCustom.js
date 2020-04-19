import React, { Component } from 'react';
import { Container, Content, Button, ListItem, Text, Icon, Left, Body } from 'native-base';
import { Image, StyleSheet } from 'react-native';

export function DrawerCustom(props) {
    return (
        <Container>
        <Content>
            <ListItem>
                <Image source={require('/ProyectosReact/Medicontrol/img/logo.png')}
                    style={{ width: 225, height: 50, marginTop: 10 }}/>
            </ListItem>
            <ListItem icon>
                <Left>
                    <Button style={{ backgroundColor: "#4682b4" }}>
                        <Icon active name="bluetooth" type="FontAwesome"/>
                    </Button>
                </Left>
                <Body>
                    <Text style={styles.textCenter} 
                    onPress={() => {props.navigation.navigate('Accionador')}}>Conexión Bluetooth</Text>
                </Body>
            </ListItem>
            <ListItem icon>
                <Left>
                    <Button style={{ backgroundColor: "#9932cc" }}>
                        <Icon active name="calendar-clock" type="MaterialCommunityIcons"/>
                    </Button>
                </Left>
                <Body>
                    <Text style={styles.textCenter} 
                    onPress={() => {props.navigation.navigate('Mydatepicker')}}>Hora y fecha</Text>
                </Body>
            </ListItem>
            <ListItem icon>
                <Left>
                    <Button style={{ backgroundColor: "#e9967a" }}>
                        <Icon active name="page" type="Foundation"/>
                    </Button>
                </Left>
                <Body>
                    <Text style={styles.textCenter} 
                    onPress={() => {props.navigation.navigate('Recetas')}}>Recetas</Text>
                </Body>
            </ListItem>
            <ListItem icon>
                <Left>
                    <Button style={{ backgroundColor: "#c71585" }}>
                        <Icon active name='user-circle-o' type='FontAwesome' />
                    </Button>
                </Left>
                <Body>
                    <Text style={styles.textCenter}
                    onPress={() => {props.navigation.navigate('Perfil')}}>Perfil</Text>
                </Body>
            </ListItem>
            <ListItem icon>
                <Left>
                    <Button style={{ backgroundColor: "#4b0082" }}>
                        <Icon active name='pill' type='MaterialCommunityIcons' />
                    </Button>
                </Left>
                <Body>
                    <Text style={styles.textCenter}
                    onPress={() => {props.navigation.navigate('Medicamentos')}}>Medicamentos</Text>
                </Body>
            </ListItem>
            <ListItem icon>
                <Left>
                    <Button style={{ backgroundColor: "#87cefa" }}>
                        <Icon active name='help-with-circle' type='Entypo' />
                    </Button>
                </Left>
                <Body>
                    <Text style={styles.textCenter}
                    onPress={() => {props.navigation.navigate('Ayuda')}}>Ayuda</Text>
                </Body>
            </ListItem>
        </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    textCenter: {
      width: '100%', // OCUPAR EL ANCHO DE CARD
      fontSize: 20,
      fontFamily: 'sans-serif-condensed',
      fontWeight: 'bold'
    }
});
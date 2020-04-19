import React, { useState, Component } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, Platform, Text, Image, StyleSheet } from 'react-native';
import { Container, Header, Left, Icon, Body, Right, Button } from 'native-base';
import { DrawerActions } from '@react-navigation/native';


const Mydatepicker = () => {

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'android');
        setDate(currentDate);
    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');

    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <Container>
            <Header style={{ backgroundColor: '#ffffff' }}>
                <Left>
                    <Icon name='menu' type='Feather' style={{ marginTop: 12 }}
                        onPress={() => navegar.dispatch(DrawerActions.openDrawer())} />
                </Left>
                <Body>
                    <Image source={require('/ProyectosReact/Medicontrol/img/hora_fecha.png')}
                        style={{ width: 225, height: 50, marginTop: 10 }} />
                </Body>
                <Right />
            </Header>
            <View>
                <Text style={{ fontSize: 25 }} >{}</Text>
                <Text style={styles.text} >Selecciona la fecha de la toma</Text>
                <View>
                    <Button 
                        style={{ backgroundColor: '#008b8b', height: 70, justifyContent:'center' }}
                        onPress={showDatepicker}>
                        <Text style={styles.letraB} >Fecha</Text>
                    </Button>
                </View>
                <Text style={{ fontSize: 25 }} >{}</Text>
                <Text style={styles.text} >Selecciona la hora de la toma</Text>
                <View>
                    <Button 
                        style={{ backgroundColor: '#ff7f50', height: 70, justifyContent:'center' }}
                        onPress={showTimepicker}>
                        <Text style={styles.letraB} >Selecciona la hora</Text>
                    </Button>
                </View>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        display="spinner"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}
            </View>
        </Container>
    );
};

export default Mydatepicker;

const styles = StyleSheet.create({
    letraB: {
        fontSize: 22,
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'bold',
        color: '#fff'
    },
    text: {
        fontSize: 25,
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'bold',
        color: '#000',
        marginTop: 30,
        marginVertical: 20
    }
});
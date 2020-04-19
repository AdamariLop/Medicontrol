import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Switch,
    TouchableOpacity,
    ToastAndroid,
    Image
} from 'react-native';
var _ = require('lodash');
import BluetoothSerial from 'react-native-bluetooth-serial'
import { Header, Left, Icon, Body, Right, Button, Container } from 'native-base';
import { DrawerActions } from '@react-navigation/native';

export default class Accionador extends Component<{}> {
    constructor(props) {
        super(props)
        this.state = {
            isEnabled: false,
            discovering: false,
            devices: [],
            unpairedDevices: [],
            connected: false,
        }
    }
    componentWillMount() {

        Promise.all([
            BluetoothSerial.isEnabled(),
            BluetoothSerial.list()
        ])
            .then((values) => {
                const [isEnabled, devices] = values

                this.setState({ isEnabled, devices })
            })

        BluetoothSerial.on('bluetoothEnabled', () => {

            Promise.all([
                BluetoothSerial.isEnabled(),
                BluetoothSerial.list()
            ])
                .then((values) => {
                    const [isEnabled, devices] = values
                    this.setState({ devices })
                })

            BluetoothSerial.on('bluetoothDisabled', () => {

                this.setState({ devices: [] })

            })
            BluetoothSerial.on('error', (err) => console.log(`Error: ${err.message}`))

        })

    }
    connect(device) {
        this.setState({ connecting: true })
        BluetoothSerial.connect(device.id)
            .then((res) => {
                console.log(`Connected to device ${device.name}`);

                ToastAndroid.show(`Connected to device ${device.name}`, ToastAndroid.SHORT);
            })
            .catch((err) => console.log((err.message)))
    }
    _renderItem(item) {

        return (<TouchableOpacity onPress={() => this.connect(item.item)}>
            <View style={styles.deviceNameWrap}>
                <Text style={styles.deviceName}>{item.item.name ? item.item.name : item.item.id}</Text>
            </View>
        </TouchableOpacity>)
    }
    enable() {
        BluetoothSerial.enable()
            .then((res) => this.setState({ isEnabled: true }))
            .catch((err) => Toast.showShortBottom(err.message))
    }

    disable() {
        BluetoothSerial.disable()
            .then((res) => this.setState({ isEnabled: false }))
            .catch((err) => Toast.showShortBottom(err.message))
    }

    toggleBluetooth(value) {
        if (value === true) {
            this.enable()
        } else {
            this.disable()
        }
    }
    discoverAvailableDevices() {

        if (this.state.discovering) {
            return false
        } else {
            this.setState({ discovering: true })
            BluetoothSerial.discoverUnpairedDevices()
                .then((unpairedDevices) => {
                    const uniqueDevices = _.uniqBy(unpairedDevices, 'id');
                    console.log(uniqueDevices);
                    this.setState({ unpairedDevices: uniqueDevices, discovering: false })
                })
                .catch((err) => console.log(err.message))
        }
    }
    toggleSwitch() {
        BluetoothSerial.write("T")
            .then((res) => {
                console.log(res);
                console.log('Successfuly wrote to device')
                this.setState({ connected: true })
            })
            .catch((err) => console.log(err.message))
    }
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
                        <Image source={require('/ProyectosReact/Medicontrol/img/blueetooth.png')}
                            style={{ width: 225, height: 50, marginTop: 10 }} />
                    </Body>
                    <Right>
                        <Icon name='user-circle-o' type='FontAwesome' onPress={() => navegar.navigate('Perfil')} />
                    </Right>
                </Header>
                <View style={styles.toolbar}>
                    <Text style={styles.toolbarTitle}>Lista de dispositivos Bluetooth</Text>
                    <View style={styles.toolbarButton}>
                        <Switch
                            value={this.state.isEnabled}
                            onValueChange={(val) => this.toggleBluetooth(val)}
                        />
                    </View>
                </View>
                <Button onPress={this.discoverAvailableDevices.bind(this)} >
                    <Text style={styles.letraB}>
                        Buscar el dispensador</Text>
                </Button>
                <FlatList
                    style={{ flex: 1 }}
                    data={this.state.devices}
                    keyExtractor={item => item.id}
                    renderItem={(item) => this._renderItem(item)}
                />
                <View style={styles.content}>
                    <Button style={{ backgroundColor: '#ff8c00', height: 80 }}
                        onPress={this.toggleSwitch.bind(this)} >
                        <Text style={styles.letraB}>
                            Cajon 1 (Abrir/Cerrar)</Text>
                    </Button>
                    <Button
                        style={{ backgroundColor: '#00ced1', height: 80 }}
                        onPress={this.toggleSwitch.bind(this)} >
                        <Text style={styles.letraB}>
                            Cajon 2 (Abrir/Cerrar)</Text>
                    </Button>
                    <Button
                        style={{ backgroundColor: '#9932cc', height: 80 }}
                        onPress={this.toggleSwitch.bind(this)}>
                        <Text style={styles.letraB}>
                            Cajon 3 (Abrir/Cerrar)</Text>
                    </Button>
                    <Button
                        style={{ backgroundColor: '#ff69b4', height: 80 }}
                        onPress={this.toggleSwitch.bind(this)}>
                        <Text style={styles.letraB}>
                            Cajon 4 (Abrir/Cerrar)</Text>
                    </Button>
                </View>
            </Container>
        );
    }
}



const styles = StyleSheet.create({
    boton: {
        paddingTop: 10,
        paddingBottom: 20,
        fontSize: 16,
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'bold',
    },
    toolbar: {
        paddingTop: 30,
        paddingBottom: 30,
        flexDirection: 'row'
    },
    toolbarButton: {
        width: 50,
        marginTop: 8,
    },
    toolbarTitle: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'bold',
        marginLeft: "5%"
    },
    deviceName: {
        fontSize: 17,
        color: "black"
    },
    deviceNameWrap: {
        margin: 10,
        borderBottomWidth: 1
    },
    content: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-end',
    },
    letraB: {
        fontSize: 16,
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: '28%'
    }
});
import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';


import Home from '../../pages/home';
import Cardapio from '../../pages/cardapio';
import Local from '../../pages/local';


const HIcon = require('../../assets/img/icon-home.png');
const CIcon = require('../../assets/img/icon-itens.png');
const LIcon = require('../../assets/img/icon-sobre.png');

const Tab = createBottomTabNavigator();

export default function TabBar() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                borderRadius: 20,
                height: 80,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.75,
                shadowRadius: 5,
            }
        }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {

                        if (focused) { // se ele estiver focado
                            return (
                                <View style={styles.box}>
                                    <Image source={HIcon} style={styles.icon} />
                                    <Text>Home</Text>
                                </View>
                            );
                        }
                        // se n tiver interação
                        return (
                            <View style={styles.box}>
                                <Image source={HIcon} style={styles.icon} />
                                <Text>Home</Text>
                            </View>
                        )

                    }
                }} />


            <Tab.Screen name='Cardapio' component={Cardapio}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (
                                <View style={styles.box}>
                                    <Image source={CIcon} style={styles.icon2} />
                                    <Text>Cardapio</Text>
                                </View>
                            );
                        }
                        return (
                            <View style={styles.box}>
                                <Image source={CIcon} style={styles.icon2} />
                                <Text>Cardapio</Text>
                            </View>
                        );
                        }
                    }}/>

                    <Tab.Screen name='Local' component={Local}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({focused}) => {
                                if(focused){
                                    return (
                                        <View style={styles.box}>
                                            <Image source={LIcon} style={styles.icon} />
                                            <Text>Local</Text>
                                        </View>
                                    )
                                }
                                return(
                                    <View style={styles.box}>
                                        <Image source={LIcon} style={styles.icon} />
                                        <Text>Local</Text>
                                    </View>
                                );
                            }
                        }}/>



        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    box: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        height: 50,
        width: 40,
    },
    icon2: {
        height: 45,
        width: 55,
        marginBottom:3,
    },
});
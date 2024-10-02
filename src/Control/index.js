import React, { Component } from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

class Control extends Component{
    render(){
      return(
        <View style={styles.container}>
          <TouchableOpacity style={styles.btnImg1}>
            <Image source={require('./ctrl-d6.png')} style={styles.img1} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnImg2}>
            <Image source={require('./ctrl-roll.png')} style={styles.img2} resizeMode="" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.btnImg3}>
            <Image source={require('./ctrl-erase.png')} style={styles.img3} />
          </TouchableOpacity>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 2,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    btnImg1:{
        zIndex: 1,
        marginRight: -10
    },
    btnImg2:{
        zIndex: 2,
        marginBottom: -10
    },
    btnImg3:{
        marginLeft: -10,
        zIndex: 1
    },
    img1:{
        width: 80,
        resizeMode: 'contain'
    },
    img2:{
        width: 120,
        resizeMode: 'contain'
    },
    img3:{
        width: 80,
        resizeMode: 'contain'
    }
});

export default Control;
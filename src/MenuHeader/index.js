import React, { Component } from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

class MenuHeader extends Component{
    render(){
      return(
        <View style={styles.container}>
          <TouchableOpacity>
            <Image source={require('./menu.png')} style={styles.img} />
          </TouchableOpacity>

          <Text>MYZ DICE ROLLER</Text>
          
          <TouchableOpacity>
            <Image source={require('./log.png')} style={styles.img} />
          </TouchableOpacity>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container:{
      backgroundColor: '#9F9E9E',
      flex: 1,
      justifyContent: 'space-between',
      paddingRight: 20,
      paddingLeft: 20,
      flexDirection: 'row',
      alignItems: 'center'
    },
    img:{
      width: 40,
      height: 40
    }
});

export default MenuHeader;
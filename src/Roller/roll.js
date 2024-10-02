import React, { Component } from "react";
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';

class Roller extends Component{
    render(){
      return(
        <View style={styles.container}>
          <View style={styles.areaDice}>
            <View style={styles.areaDiceInfo}>
              <TouchableOpacity>
                <Image source={require('./info.png')} style={styles.imgInfo} />
              </TouchableOpacity>
            </View>
            <View style={styles.areaDiceTxt}>
              <Text style={styles.diceTxt}>
                Base
              </Text>
            </View>

            <View style={styles.areaDiceInput}>
              <TouchableOpacity style={styles.areaDiceAdiSub}>
                <Image source={require('./b-sub.png')} style={styles.imgDiceAdiSub} />
              </TouchableOpacity>
              
              <TextInput defaultValue="4" editable={false} style={styles.txtInputDice}></TextInput>

              <TouchableOpacity style={styles.areaDiceAdiSub}>
                <Image source={require('./b-adi.png')} style={styles.imgDiceAdiSub} />
              </TouchableOpacity>
            </View>

          </View>
          
          <View style={styles.areaDice}>
            <View style={styles.areaDiceInfo}>
              <TouchableOpacity>
                <Image source={require('./info.png')} style={styles.imgInfo} />
              </TouchableOpacity>
            </View>
            <View style={styles.areaDiceTxt}>
              <Text style={styles.diceTxt}>
                Skill
              </Text>
            </View>

            <View style={styles.areaDiceInput}>
              <TouchableOpacity style={styles.areaDiceAdiSub}>
                <Image source={require('./s-sub.png')} style={styles.imgDiceAdiSub} />
              </TouchableOpacity>
              
              <TextInput defaultValue="3" editable={false} style={styles.txtInputDice}></TextInput>

              <TouchableOpacity style={styles.areaDiceAdiSub}>
                <Image source={require('./s-adi.png')} style={styles.imgDiceAdiSub} />
              </TouchableOpacity>
            </View>

          </View>

          <View style={styles.areaDice}>
            <View style={styles.areaDiceInfo}>
              <TouchableOpacity>
                <Image source={require('./info.png')} style={styles.imgInfo} />
              </TouchableOpacity>
            </View>
            <View style={styles.areaDiceTxt}>
              <Text style={styles.diceTxt}>
                Gear
              </Text>
            </View>

            <View style={styles.areaDiceInput}>
              <TouchableOpacity style={styles.areaDiceAdiSub}>
                <Image source={require('./g-sub.png')} style={styles.imgDiceAdiSub} />
              </TouchableOpacity>
              
              <TextInput defaultValue="2" editable={false} style={styles.txtInputDice}></TextInput>

              <TouchableOpacity style={styles.areaDiceAdiSub}>
                <Image source={require('./g-adi.png')} style={styles.imgDiceAdiSub} />
              </TouchableOpacity>
            </View>

          </View>


        </View>
      );
    }
}

const styles = StyleSheet.create({
    container:{
      flex: 12,
      margin: 10
    },
    areaDice:{
      backgroundColor: '#D9D9D9',
      flex: 4,
      margin: 10,
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 20,
      padding: 10
    },
    areaDiceInfo:{
      flex: 1,
      alignItems:'flex-end',
      marginTop: 5,
      marginRight: 5
    },
    areaDiceTxt:{
      flex: 2
    },
    areaDiceInput:{
      flex: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 20,
      paddingRight: 20
    },
    imgInfo:{
      width: 20,
      height: 20
    },
    diceTxt:{
      textAlign: 'center',
      fontSize: 25
    },
    areaDiceAdiSub:{
      paddingRight: 20,
      paddingLeft: 20
    },
    imgDiceAdiSub:{
      width: 40,
      resizeMode: 'contain'
    },
    txtInputDice:{
      height: 70,
      width: 70,
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 20,
      textAlign: 'center',
      fontSize: 30, 
      color: 'black',
      backgroundColor: 'white'
    }
});

export default Roller;
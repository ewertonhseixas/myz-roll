import React, { Component } from "react";
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';

class Roller extends Component{
    render(){
      return(
        <View style={styles.container}>

          <View style={styles.areaTittle}>
            <Text style={styles.txtTittle}>PUSH RESULT</Text>
          </View>

          <View style={styles.areaSuccess}>

            <View style={styles.areaDiceTxt}>
              
              <View style={styles.btnInfo}/>
              
              <Text style={styles.diceTxt}>
                Success
              </Text>

              <TouchableOpacity style={styles.btnInfo}>
                <Image source={require('./info.png')} style={styles.imgInfo} />
              </TouchableOpacity>

            </View>

            <View style={styles.areaDiceResult}>
              
              <Image style={styles.imgResult} source={require('./dices/b6.png')} />
              <Image style={styles.imgResult} source={require('./dices/b6.png')} />
              <Image style={styles.imgResult} source={require('./dices/s6.png')} />
              <Image style={styles.imgResult} source={require('./dices/g6.png')} />

            </View>

          </View>

          <View style={styles.areaFailure}>

            <View style={styles.areaDiceTxt}>
              
              <View style={styles.btnInfo}/>
              
              <Text style={styles.diceTxt}>
                Failure
              </Text>

              <TouchableOpacity style={styles.btnInfo}>
                <Image source={require('./info.png')} style={styles.imgInfo} />
              </TouchableOpacity>

            </View>

            <View style={styles.areaDiceResult}>
              
              <Image style={styles.imgResult} source={require('./dices/b1.png')} />
              <Image style={styles.imgResult} source={require('./dices/s1.png')} />
              <Image style={styles.imgResult} source={require('./dices/g1.png')} />

            </View>

          </View>
          
          <View style={styles.areaDice}>

            <View style={styles.areaDiceTxt}>
              
              <Text style={styles.diceTxt}>
                Base
              </Text>

            </View>

            <View style={styles.areaDiceResult}>
              
              <Image style={styles.imgDices} source={require('./dices/b1.png')} />
              <Image style={styles.imgDices} source={require('./dices/b3.png')} />
              <Image style={styles.imgDices} source={require('./dices/b5.png')} />
              <Image style={styles.imgDices} source={require('./dices/b6.png')} />

            </View>

          </View>

          <View style={styles.areaDice}>

            <View style={styles.areaDiceTxt}>
              
              <Text style={styles.diceTxt}>
                Skill
              </Text>

            </View>

            <View style={styles.areaDiceResult}>
              
              <Image style={styles.imgDices} source={require('./dices/s1.png')} />
              <Image style={styles.imgDices} source={require('./dices/s2.png')} />
              <Image style={styles.imgDices} source={require('./dices/s6.png')} />

            </View>

          </View>

          <View style={styles.areaDice}>

            <View style={styles.areaDiceTxt}>
              
              <Text style={styles.diceTxt}>
                Gear
              </Text>

            </View>

            <View style={styles.areaDiceResult}>
              
              <Image style={styles.imgDices} source={require('./dices/g6.png')} />
              <Image style={styles.imgDices} source={require('./dices/g1.png')} />

            </View>

          </View>



        </View>
      );
    }
}

const styles = StyleSheet.create({
    container:{
      flex: 12,
      margin: 20
    },
    areaTittle:{
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    },
    txtTittle:{
      textAlign: 'center',
      fontSize: 28,
      fontWeight: 'bold'      
    },
    areaSuccess:{
      backgroundColor: '#8FBFD3',
      flex: 3,
      margin: 10,
      borderRadius: 20,
      padding: 10
    },
    areaFailure:{
      backgroundColor: '#FFB7B7',
      flex: 3,
      margin: 10,
      borderRadius: 20,
      padding: 10
    },
    areaDice:{
      backgroundColor: '#D9D9D9',
      flex: 2,
      margin: 10,
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 20,
      padding: 10
    },
    areaDiceTxt:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    areaDiceResult:{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 20,
      paddingRight: 20
    },
    btnInfo:{
      flex: 1
    },
    imgInfo:{
      width: 20,
      height: 20
    },
    diceTxt:{
      flex: 10,
      textAlign: 'center',
      fontSize: 20
    },
    imgResult:{
      width: 30,
      height: 30,
      marginHorizontal: 5,
    },
    imgDices:{
      width: 25,
      height: 25,
      marginHorizontal: 5,
    }
});

export default Roller;
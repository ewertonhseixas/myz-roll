import React, { Component } from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';

class Roller extends Component{
    render(){
      return(
        <View style={styles.container}>
          
          <View style={{flex:2}}>

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
          </View>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.containerScroll}>
          
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


          </ScrollView>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container:{
      flex: 12,
      margin: 10
    },
    containerScroll:{
      flexDirection: 'row',
      flex: 1
    },
    areaTittle:{
      justifyContent: 'center',
      flex: 1,
      alignItems: 'center'
    },
    txtTittle:{
      textAlign: 'center',
      fontSize: 28,
      fontWeight: 'bold'      
    },
    areaSuccess:{
      flex: 2,
      backgroundColor: '#8FBFD3',
      margin: 10,
      borderRadius: 20,
      paddingHorizontal: 10,
      paddingVertical: 15
    },
    areaFailure:{
      flex: 2,
      backgroundColor: '#FFB7B7',
      margin: 10,
      borderRadius: 20,
      paddingHorizontal: 10,
      paddingVertical: 15
    },
    areaDice:{
      backgroundColor: '#D9D9D9',
      flex: 1,
      width: 300,
      margin: 10,
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 20,
      paddingHorizontal: 10,
      paddingVertical: 15,
      justifyContent: 'center',
      alignItems: 'center'
    },
    areaDiceTxt:{
      flexDirection: 'row',
      flex: 1,
    },
    areaDiceResult:{
      flex: 3,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
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
      fontSize: 25
    },
    imgResult:{
      width: 35,
      height: 35,
      marginHorizontal: 5
    },
    imgDices:{
      width: 40,
      height: 40,
      marginHorizontal: 5
    }
});

export default Roller;
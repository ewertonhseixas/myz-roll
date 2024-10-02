import React, { Component } from 'react';
import {View, 
        StyleSheet
      } from 'react-native';
import MenuHeader from './src/MenuHeader';
import Control from './src/Control';
import Roller from './src/Roller';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      
    };

  };


  render(){

    return(
      <View
        style={styles.container}
      >
        
          
          <MenuHeader/>
          
          <Roller/>
          
          <Control/>

        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#D9D9D9',
    flex:1,
    marginTop: 30
  }
});

export default App;


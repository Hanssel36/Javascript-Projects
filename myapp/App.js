import React, { Component } from 'react';
import { AppRegistry,Text, View, StyleSheet,TextInput, TouchableOpacity, Picker } from 'react-native';
import { black, red } from 'ansi-colors';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '0', count: '1', Tips: 0.0, percent: '0.20' };
    this.compute = this.compute.bind(this);
  }
  compute(){
    
    let Sum = parseFloat(this.state.text);
    let Sum2 = parseFloat(this.state.count); 
    let Sum3 = parseFloat(this.state.percent); 
    let ans = (Sum*Sum3)/Sum2
    let ans2 = Math.round(ans*100)/100
    
    this.setState({Tips:ans2 });
    
  }
  
  render() {
   
    return (
    <View style = {styles.container}>
        {/* <View style = {styles.group}> */}
        <Text style = {styles.move}>Please enter total amount</Text>
        <TextInput
          style={styles.input}
          placeholder = '$$$'
          keyboardType = 'numeric'
          value = {this.state.text}
          onChangeText = {(text) => this.setState({text})}
            />
        <Text style = {styles.move}>Please enter total amount of people</Text>
        <TextInput
          style={styles.input}
          placeholder = '1'
          keyboardType = 'numeric'
          value = {this.state.count}
          onChangeText = {(count) => this.setState({count})}
            />
        {/* </View> */}
        <Picker
  selectedValue={this.state.percent}
  style={{height: 50, width: 100}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({percent: itemValue})
  }>
  <Picker.Item label="20%" value = '0.20' />
  <Picker.Item label="15%" value="0.15" />
  <Picker.Item label="10%" value="0.10" />
  <Picker.Item label="5%" value="0.05" />
</Picker>
        
        <Text style = {styles.move}>The amount everyone Tips: {this.state.Tips}</Text>
      <TouchableOpacity style = {styles.btn}
      onPress = {this.compute}>
        <Text style = {styles.btnText}>Submit</Text>
      </TouchableOpacity>
      
    </View>
    
    );
  }
}

const styles = StyleSheet.create({
  move:{
    textAlign: 'center',
    color: 'orange',
    fontSize: 20,
    fontStyle: 'italic',
  },
  container:{
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column',
    
    
  },
  group:{
    marginTop: 1,
    alignContent: 'center',
  },
  input: {
    fontWeight: 'bold',
    fontSize: 30,
    borderRadius: 5,
    borderWidth: 5,
    borderColor: 'blue',
    marginHorizontal: 50,
    textAlign: 'center'
  },
  btn:{
    borderWidth:1,
    backgroundColor: 'green',
    margin: 40,
    
  },
  btnText:{
    fontSize: 30,
  }

});


AppRegistry.registerComponent('app', () => app);
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { ToastAndroid, Alert, AppRegistry, Platform, StyleSheet, Text,Button, View, TextInput, TouchableOpacity } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    constructor(){
           super()
           this.state={
           resultText:"",
           calculationTxt: ""
           }
           this.operations = ["Del","C","+","-","*","/"]

    }

    calculateResult(){
        const text = this.state.resultText
        this.setState({
            calculationTxt: eval(text),
            resultText: eval(text) + ''

        })

    }

    validate(){
        const text = this.state.resultText
        switch(text.slice(-1)){
            case '+':
            case '-':
            case '*':
            case '/':

                 return false
        }
        return true

    }

    buttonPressed(text){
        //Alert.alert('Clicked : '+text);
        //ToastAndroid.show('This is the number : '+text, ToastAndroid.SHORT);
        if(text == '='){
            return this.validate() && this.calculateResult()
        }else{
             this.setState({
                 resultText: this.state.resultText + text
            })

        }

    }

    operate(operation){
    switch(operation){
        case 'Del' :
            let text = this.state.resultText.split('')
            text.pop()
            text.join('')
            this.setState({
                resultText: text.join('')
            })
            break
        case 'C' :
              this.setState({
                    resultText: "",
                    calculationTxt: ""
               })
               break
        case '+' :
        case '-' :
        case '*' :
        case '/' :
            const lastChar = this.state.resultText.split('').pop()

            if(this.operations.indexOf(lastChar) > 0 || lastChar == ''){
                return
            }
            if(this.state.text == "" || this.state.text ){
                    return
            }else{
            this.setState({
                resultText: this.state.resultText + operation
            })}
    }
    }


   render() {

        let rows = []
        let nums = [[7,8,9],[4,5,6],[1,2,3],['.',0,'=']]
           for(let i = 0; i<4; i++){
                let row = []
               for(let j=0; j<3 ; j++){
                    row.push( <TouchableOpacity style={styles.btn} onPress={() => this.buttonPressed(nums[i][j])}>
                                 <Text style={styles.singlebutton}>{nums[i][j]}</Text>
                              </TouchableOpacity>)
               }
               rows.push(<View style={styles.row}>{row}</View>)
           }


           let ops = []
           for(let k = 0; k < 6; k++){
                ops.push(
                <TouchableOpacity  style={styles.operationsbtn} onPress={()=>this.operate(this.operations[k])}>
                                <Text style={[styles.blacktext]}>{this.operations[k]}</Text>
                         </TouchableOpacity>)
           }

     return (
       <View style={styles.container}>
                <View style={styles.result}>
                     <Text style={styles.resultText}>{this.state.calculationTxt}</Text>
                </View>
                <View style={styles.calculation}>
                       <Text style={styles.calculationText}>{this.state.resultText}</Text></View>
                <View style={styles.buttons}>
                    <View style={styles.numbers}>
                            {rows}
                    </View>
                    <View style={styles.operations}>
                        {ops}
                    </View>

                </View>
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1
   },
  operations: {
        flex: 1,
        justifyContent: 'center',
       },
   numbers:{
    flex: 3,
    backgroundColor: 'white',
    justifyContent: 'center',

   },
   blacktext:{

     color: 'white',
     fontSize: 20,
     alignSelf: 'center'
   },
   operationsbtn:{
     flex:1,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: 'steelblue',
     borderColor: 'white',
     borderWidth:1

      },
   btn:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'skyblue',
        borderColor: 'white',
        borderWidth:1

    },
   resultText:{
    fontSize: 32,
    color: 'black',
    marginRight: 10
   },
   calculationText: {
      color: 'black',
      fontSize: 24,
      marginRight: 10
   },
   singlebutton:{
        flex:1,
        fontSize: 20,
        color: "black",
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',

   },
   row: {
     flex:1,
     flexDirection: 'row',
     justifyContent: 'space-around',
     alignItems: 'center'
    },

   result: {
     flex: 2,
     backgroundColor: 'white',
     alignItems:'flex-end',
     justifyContent: 'center',
   },
   calculation: {
      flex: 1,
      backgroundColor: 'powderblue',
      alignItems:'flex-end',
      justifyContent: 'center',
        borderColor: 'white',
      borderWidth:1
   },
   buttons: {
    flex: 7,
    flexDirection: 'row',

   }
 });


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Alert, AppRegistry, Platform, StyleSheet, Text,Button, View, TextInput, TouchableOpacity } from 'react-native';

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
           this.state={}

    }



   render() {

        let rows = []
        let nums = [[1,2,3],[4,5,6],[7,8,9],['.',0,'=']]
           for(let i = 0; i<4; i++){
                let row = []
               for(let j=0; j<3 ; j++){
                    row.push( <TouchableOpacity style={styles.btn}>
                                 <Text style={styles.singlebutton}>{nums[i][j]}</Text>
                              </TouchableOpacity>)
               }
               rows.push(<View style={styles.row}>{row}</View>)
           }

           let operations = ["+","-","*","/"]
           let ops = []
           for(let k = 0; k < 4;k++){
                ops.push(<TouchableOpacity  style={styles.operationsbtn}>
                                <Text style={[styles.blacktext]}>{operations[k]}</Text>
                         </TouchableOpacity>)
           }

     return (
       <View style={styles.container}>
                <View style={styles.result}>
                     <Text style={styles.resultText}>11*11</Text>
                </View>
                <View style={styles.calculation}>
                       <Text style={styles.calculationText}>11*11</Text></View>
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
    fontSize: 27,
    color: 'black'
   },
   calculationText: {
            color: 'black',
            fontSize: 24
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


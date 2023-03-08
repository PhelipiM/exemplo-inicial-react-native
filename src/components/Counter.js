import { Component } from "react";
import { Text, View, StyleSheet,Button } from "react-native";
import { TextInput } from "react-native-web";

export default class Counter extends Component {
    state ={
        count: 0,
        step:5,
    };
    incrementar() {
        this.setState({ count: this.state.count + this.state.step });
    }
    decrementar(){
        this.setState({ count: this.state.count - this.state.step });
    }
    alteraStep(e){
        console.log(e);
        this.setState({step: parseInt(e.nativeEvent.text)});
    }
    render(){
        return(
            <View style={styles.contador}>
                <TextInput 
                value={this.state.step.toString}
                onChange={(e) =>this.alteraStep(e)}
                inputMode="numeric"
                keyboardType="numeric"
                />
                <Text> Contador:{this.state.count} </Text>
                <Button onPress={() => this.incrementar()}title= "+"/>
                <Button onPress={() => this.decrementar()}title= "-"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contador: {
        flexDirection:'row',
        alignItems:"center",
        
    },
});
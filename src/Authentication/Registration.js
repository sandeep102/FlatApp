import React from 'react'
import {Image,
    View,
    Dimensions,
    Text,
    TextInput,
    TouchableOpacity} from 'react-native'
import {Button} from 'react-native-elements'
import styles from './Styles'


const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = { username: '',password: '',email: '' };
    }
    render(){
        return(
            <View style={{flex:1}}>
                <Image source={require('../images/login.jpg')} style={{height: HEIGHT,width: WIDTH,flex:1,position:'absolute'}} />
                <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:20}}>

                    <Text style={styles.appTitle}>CREATE ACCOUNT</Text>
                </View>
                <View style={{flex:1,justifyContent: 'flex-end',marginBottom:10}}>
                    <View style={styles.formControl}>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Username"
                            placeholderTextColor="#fff"
                            onChangeText={(username) => this.setState({username})}
                            value={this.state.username}
                        />
                    </View>
                    <View style={styles.formControl}>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Email"
                            placeholderTextColor="#fff"
                            onChangeText={(email) => this.setState({email})}
                            value={this.state.email}
                        />
                    </View>
                    <View style={styles.formControl}>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="******"
                            placeholderTextColor="#fff"
                            onChangeText={(password) => this.setState({password})}
                            value={this.state.password}
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.formControl}>
                        <Button title="Continue" buttonStyle={{borderRadius:20,backgroundColor: 'transparent',borderColor:'#adebad',borderWidth:1}}/>
                    </View>
                    <View style={styles.bottomView}>
                        <Text style={{color:'#fff'}}>Terms & Conditions</Text>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('LOGIN')}>
                            <Text style={{color:'#fff'}}>Login</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        )
    }
}
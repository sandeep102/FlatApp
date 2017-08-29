import React from 'react'
import {Image,View,Dimensions,Text,TextInput,TouchableOpacity} from 'react-native'
import {Button} from 'react-native-elements'
import styles from './Styles'


const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = { username: '',password: '' };
    }
    render(){
        return(
            <View style={{flex:1}}>
                <Image source={require('../images/login.jpg')}
                       style={{height: HEIGHT,width: WIDTH,flex:1,position:'absolute'}} />

                <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:20}}>
                    <Image source={require('../images/logo.png')} style={{tintColor: '#fff'}}  />
                    <Text style={styles.appTitle}>FLAT APP</Text>
                </View>
                <View style={{flex:1,justifyContent: 'flex-end',marginBottom:15}}>
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
                                placeholder="******"
                                placeholderTextColor="#fff"
                                onChangeText={(password) => this.setState({password})}
                                value={this.state.password}
                                secureTextEntry={true}
                            />
                        </View>
                        <View style={styles.formControl}>
                            <Button
                                title="Get Started"
                                buttonStyle={{borderRadius:20,backgroundColor: '#56bd94'}}
                                onPress={()=> this.props.navigation.navigate('NEWS')}
                            />
                        </View>
                        <View style={styles.bottomView}>
                            <TouchableOpacity onPress={()=> this.props.navigation.navigate('REGISTER')}>
                                <Text style={{color:'#fff'}}>Create Account</Text>
                            </TouchableOpacity>

                            <Text style={{color:'#fff'}}>Need Help?</Text>
                        </View>
                    </View>
            </View>
        )
    }
}
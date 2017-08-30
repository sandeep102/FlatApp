import React from 'react'
import {Image,View,Dimensions,Text,TextInput,TouchableOpacity} from 'react-native'
import {Button} from 'react-native-elements'
import styles from './Styles'
import {connect} from 'react-redux'
import * as actions from '../redux/action'
import KeyboardAvoidingView from 'react-native-keyboard-avoiding-view';

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

class Login extends React.Component{
    constructor(props) {
        super(props);
    }


    onEmailChanged = (text) =>{
        this.props.usernameChanged(text)
    }

    onPasswordChanged = (text) =>{
        this.props.passwordChanged(text)
    }
    renderError(){
        if(this.props.error){
            return(
                <View>
                    <Text style={{backgroundColor:'transparent',textAlign:'center'}}>{this.props.error}</Text>
                </View>
            )
        }
    }
    Login(){
        this.props.userLogin(this.props.username,this.props.password,this.props.navigation)
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
                    {this.renderError()}
                        <View style={styles.formControl}>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder="Username"
                                placeholderTextColor="#fff"
                                onChangeText={(username) => this.onEmailChanged(username)}
                                value={this.props.username}
                            />
                        </View>
                        <View style={styles.formControl}>
                                <TextInput
                                    style={styles.inputStyle}
                                    placeholder="******"
                                    placeholderTextColor="#fff"
                                    onChangeText={(password) => this.props.passwordChanged(password)}
                                    value={this.props.password}
                                    secureTextEntry={true}
                                />
                        </View>

                        <View style={styles.formControl}>
                            <Button
                                title="Get Started"
                                buttonStyle={{borderRadius:20,backgroundColor: '#56bd94'}}
                                onPress={()=> this.Login()}
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

const mapStateToProps = ({ auth }) =>{

    const {username, password, error, isLoggedIn} = auth
    return{
        username, password, error, isLoggedIn
    }
}

export default connect(mapStateToProps,actions)(Login)

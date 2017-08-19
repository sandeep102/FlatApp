import React from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import {StackNavigator} from 'react-navigation'
import Hr from 'react-native-hr'
import ProgressBar from './ProgressBar'

class Overview extends React.Component{
    static navigationOptions = ({navigation}) =>{
        return{
            title: <Image
                source={require('../images/logo.png')}
                style={{height: 26,width: 26,tintColor: '#fff'}}
            />,
            headerLeft:
                <TouchableOpacity onPress={()=> navigation.navigate('HOME')}>
                    <Image
                        source={require('../icon/leftArrow.png')}
                        style={{height: 25,width: 25,marginLeft:10,tintColor: '#fff'}}
                    />
                </TouchableOpacity>,
            headerRight:
                <TouchableOpacity onPress={()=> navigation.navigate('DrawerOpen')}>
                    <Image
                        source={require('../icon/nav.png')}
                        style={{height: 32,width: 35,marginRight:10,tintColor: '#fff'}}
                    />
                </TouchableOpacity>,
            headerStyle: {
                backgroundColor: '#00c497'
            }
        }
    }
    state = {progress: 0,progress2: 12, progrees3:9,progress4:7}

    render(){

        return(
            <View style={{flex:1,backgroundColor:'#01cca1'}}>
                <View>
                    <Text style={styles.UITitle}>OVERVIEW</Text>
                    <Text style={styles.tagline}>what you are reading the most</Text>
                </View>
                <View style={{margin:15,}}>
                    <View style={{marginTop:10,}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={styles.category}>TECHNOLOGY</Text>
                            <Text style={styles.category}>15%</Text>
                        </View>
                        <ProgressBar
                            backgroundStyle={{backgroundColor: '#b3b3b3', borderRadius: 2}}
                            style={{marginTop: 10, width: 300}}
                            initialProgress={0.15}
                        />
                    </View>
                    <View style={{marginTop:10}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                            <Text style={styles.category}>AUTO</Text>
                            <Text style={styles.category}>15%</Text>
                        </View>
                        <ProgressBar
                            backgroundStyle={{backgroundColor: '#b3b3b3', borderRadius: 2}}
                            style={{marginTop: 10, width: 300}}
                            initialProgress={0.12}
                        />
                    </View>
                    <View style={{marginTop:10}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                            <Text style={styles.category}>EDUCATION</Text>
                            <Text style={styles.category}>15%</Text>
                        </View>
                        <ProgressBar
                            backgroundStyle={{backgroundColor: '#b3b3b3', borderRadius: 2}}
                            style={{marginTop: 10, width: 300}}
                            initialProgress={0.09}
                        />
                    </View>
                    <View style={{marginTop:10}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                            <Text style={styles.category}>SCIENCE</Text>
                            <Text style={styles.category}>15%</Text>
                        </View>
                        <ProgressBar
                            backgroundStyle={{backgroundColor: '#b3b3b3', borderRadius: 2}}
                            style={{marginTop: 10, width: 300}}
                            initialProgress={0.07}
                        />
                    </View>
                    <View style={{marginTop:10}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                            <Text style={styles.category}>SCIENCE</Text>
                            <Text style={styles.category}>15%</Text>
                        </View>
                        <ProgressBar
                            backgroundStyle={{backgroundColor: '#b3b3b3', borderRadius: 2}}
                            style={{marginTop: 10, width: 300}}
                            initialProgress={0.05}
                        />
                    </View>
                    <View style={{marginTop:10}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                            <Text style={styles.category}>SPORTS</Text>
                            <Text style={styles.category}>15%</Text>
                        </View>
                        <View>
                            <ProgressBar
                                backgroundStyle={{backgroundColor: '#b3b3b3', borderRadius: 2}}
                                style={{marginTop: 10, width: 300}}
                                initialProgress={0.02}
                            />
                        </View>


                    </View>

                </View>
            </View>
        )
    }
}

const styles = {
    UITitle:{
        marginTop: 30,
        textAlign: 'center',
        color: '#fff',
        fontSize:18,
        fontWeight:'bold'
    },
    tagline:{
        textAlign: 'center',
        color: '#fff',
    },
    category:{
        color:'#fff',
        fontSize: 12,
        fontWeight: 'bold'
    },
    itemContainer:{

    }
}

const OverviewNav = StackNavigator({
    Overview: {screen: Overview}
})

export default OverviewNav
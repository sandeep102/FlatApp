import React from 'react'
import {View,Image,Text,TouchableOpacity,ScrollView} from 'react-native'
import styles from './Styles'
import {StackNavigator} from 'react-navigation'
import Hr from 'react-native-hr'

class Profile extends React.Component{
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
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <View style={{justifyContent:'center',alignItems: 'center',backgroundColor:'#01cca1'}}>
                    <Image source={require('../images/tech.jpg')} style={{marginTop:10,height: 70,width: 70,borderRadius: 35,}}  />
                    <Text style={styles.usernameStyle}>Kumar Sanket</Text>
                    <Text style={styles.tabTagline}>CEO, GeekyAnts</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                    <View style={styles.tabItems}>
                        <Text style={styles.number}>13</Text>
                        <Text style={styles.category}>Comments</Text>
                    </View>
                    <View style={styles.tabItems}>
                        <Text style={styles.number}>12</Text>
                        <Text style={styles.category}>Channels</Text>
                    </View>
                    <View style={styles.tabItems}>
                        <Text style={styles.number}>52</Text>
                        <Text style={styles.category}>Bookmarks</Text>
                    </View>

                </View>
                <Hr lineColor="#ccc" />
                <ScrollView>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <Image source={require('../images/fashion.png')} style={{height:90,width:80}} />
                        </View>
                        <View style={styles.cardStyle}>
                            <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <Text style={{fontSize: 12,marginRight:10}}>style.com</Text>
                                <View>
                                    <TouchableOpacity>
                                        <Text style={{fontWeight:'bold',fontSize: 12}}>FASHION</Text>
                                    </TouchableOpacity>
                                    <Hr lineColor="#8c8c8c" />
                                </View>
                            </View>
                        </View>
                        <Hr lineColor="#ccc" />
                    </View>
                    <Hr lineColor="#ccc" />
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <Image source={require('../images/tech.jpg')} style={{height:90,width:80}} />
                        </View>
                        <View style={styles.cardStyle}>
                            <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <Text style={{fontSize: 12,marginRight:10}}>tech.com</Text>
                                <View>
                                    <TouchableOpacity>
                                        <Text style={{fontWeight:'bold',fontSize: 12}}>TECHNOLOGY</Text>
                                    </TouchableOpacity>
                                    <Hr lineColor="#8c8c8c" />
                                </View>
                            </View>
                        </View>
                        <Hr lineColor="#ccc" />
                    </View>
                    <Hr lineColor="#ccc" />
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <Image source={require('../images/tech.jpg')} style={{height:90,width:80}} />
                        </View>
                        <View style={styles.cardStyle}>
                            <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <Text style={{fontSize: 12,marginRight:10}}>tech.com</Text>
                                <View>
                                    <TouchableOpacity>
                                        <Text style={{fontWeight:'bold',fontSize: 12}}>TECHNOLOGY</Text>
                                    </TouchableOpacity>
                                    <Hr lineColor="#8c8c8c" />
                                </View>
                            </View>
                        </View>
                        <Hr lineColor="#ccc" />
                    </View>
                    <Hr lineColor="#ccc" />
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <Image source={require('../images/tech.jpg')} style={{height:90,width:80}} />
                        </View>
                        <View style={styles.cardStyle}>
                            <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <Text style={{fontSize: 12,marginRight:10}}>tech.com</Text>
                                <View>
                                    <TouchableOpacity>
                                        <Text style={{fontWeight:'bold',fontSize: 12}}>TECHNOLOGY</Text>
                                    </TouchableOpacity>
                                    <Hr lineColor="#8c8c8c" />
                                </View>
                            </View>
                        </View>
                        <Hr lineColor="#ccc" />
                    </View>
                    <Hr lineColor="#ccc" />
                </ScrollView>

            </View>
        )
    }
}

const ProfileNav = StackNavigator({
    Settings: {screen: Profile}
})

export default ProfileNav
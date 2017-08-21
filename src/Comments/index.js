import React from 'react'
import {View,
    ScrollView,
    Text,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Dimensions} from 'react-native'
import renderIf from './renderif'
import Hr from 'react-native-hr'
import styles from './Styles'

const WIDTH = Dimensions.get('window').width

class Comments extends React.Component {
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
                        style={{height: 26,width: 26,marginLeft:10,tintColor: '#fff'}}
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

    constructor(props){
        super(props);

        this.state ={
            status:true,
            buttonPress: true,
            viewHeight:  0,
            viewWidth: 0
        }
    }
    find_dimension(event){
        const {height,width} = event.nativeEvent.layout
        this.setState({viewWidth: width})
    }

    showView(){
        this.setState({status: true})
        this.setState({buttonPress: true})

    }
    showView2(){
        this.setState({status: false})
        this.setState({buttonPress: false})

    }

    render(){
        return(
            <View style={{flex:1}}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>23 COMMENTS</Text>
                </View>
                <View style={styles.topTab}>
                    <TouchableOpacity style={
                        this.state.buttonPress ? styles.buttonPress : styles.buttonStyle }
                                        onPress={()=> this.showView()}>
                        <Text style={{textAlign: 'center',color: '#fff'}}>Best</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={
                        this.state.buttonPress ? styles.buttonStyle : styles.buttonPress}
                                        onPress={()=> this.showView()}>
                        <Text style={{textAlign: 'center',color: '#fff'}}>Newest</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={
                        this.state.buttonPress ? styles.buttonStyle : styles.buttonPress }  onPress={()=> this.showView2()}>
                        <Text style={{textAlign: 'center',color: '#fff'}}>Oldest</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    {renderIf(this.state.status)(

                        <ScrollView style={{flex:1}}>
                            <View style={{flexDirection:'row'}}>
                                <View style={{flex:1.5,padding:5}}>
                                    <Image
                                        source={require('../images/tech.jpg')}
                                        style={{height:40,width:40,borderRadius:20}}
                                    />
                                </View>

                                <View
                                    style={[styles.cardStyle,{marginTop:22}]}>
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                            <Text style={{fontWeight:'bold',fontSize: 12,marginLeft:20}}>Akshay kumar</Text>
                                            <Image
                                                source={require('../icon/clock.png')}
                                                style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                            <Text style={{fontSize: 12}}>May 24, 11 AM</Text>
                                            <Image
                                                source={require('../icon/heart.png')}
                                                style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                            <Text style={{fontSize: 12}}>12</Text>
                                        </View>

                                    </View>
                                    <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                                </View>
                            </View>
                            <Hr lineColor="#ccc" />
                            <View style={{flexDirection:'row'}}>
                                <View style={{flex:1.5,padding:5}}>
                                    <Image
                                        source={require('../images/tech.jpg')}
                                        style={{height:40,width:40,borderRadius:20}}
                                    />
                                </View>

                                <View
                                    style={[styles.cardStyle,{marginTop:22}]}>
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                            <Text style={{fontWeight:'bold',fontSize: 12,marginLeft:20}}>Akshay kumar</Text>
                                            <Image
                                                source={require('../icon/clock.png')}
                                                style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                            <Text style={{fontSize: 12}}>May 24, 11 AM</Text>
                                            <Image
                                                source={require('../icon/heart.png')}
                                                style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                            <Text style={{fontSize: 12}}>12</Text>
                                        </View>

                                    </View>
                                    <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                                </View>
                            </View>
                            <Hr lineColor="#ccc" />
                            <View style={{flexDirection:'row'}}>
                                <View style={{flex:1.5,padding:5}}>
                                    <Image
                                        source={require('../images/tech.jpg')}
                                        style={{height:40,width:40,borderRadius:20}}
                                    />
                                </View>

                                <View
                                    style={[styles.cardStyle,{marginTop:22}]}>
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                            <Text style={{fontWeight:'bold',fontSize: 12,marginLeft:20}}>Akshay kumar</Text>
                                            <Image
                                                source={require('../icon/clock.png')}
                                                style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                            <Text style={{fontSize: 12}}>May 24, 11 AM</Text>
                                            <Image
                                                source={require('../icon/heart.png')}
                                                style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                            <Text style={{fontSize: 12}}>12</Text>
                                        </View>

                                    </View>
                                    <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                                </View>
                            </View>
                            <Hr lineColor="#ccc" />
                            <View style={{flexDirection:'row'}}>
                                <View style={{flex:1.5,padding:5}}>
                                    <Image
                                        source={require('../images/tech.jpg')}
                                        style={{height:40,width:40,borderRadius:20}}
                                    />
                                </View>

                                <View
                                    style={[styles.cardStyle,{marginTop:22}]}>
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                            <Text style={{fontWeight:'bold',fontSize: 12,marginLeft:20}}>Akshay kumar</Text>
                                            <Image
                                                source={require('../icon/clock.png')}
                                                style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                            <Text style={{fontSize: 12}}>May 24, 11 AM</Text>
                                            <Image
                                                source={require('../icon/heart.png')}
                                                style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                            <Text style={{fontSize: 12}}>12</Text>
                                        </View>

                                    </View>
                                    <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                                </View>
                            </View>
                            <Hr lineColor="#ccc" />
                            <View style={{flexDirection:'row'}}>
                                <View style={{flex:1.5,padding:5}}>
                                    <Image
                                        source={require('../images/tech.jpg')}
                                        style={{height:40,width:40,borderRadius:20}}
                                    />
                                </View>

                                <View
                                    style={[styles.cardStyle,{marginTop:22}]}>
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                            <Text style={{fontWeight:'bold',fontSize: 12,marginLeft:20}}>Akshay kumar</Text>
                                            <Image
                                                source={require('../icon/clock.png')}
                                                style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                            <Text style={{fontSize: 12}}>May 24, 11 AM</Text>
                                            <Image
                                                source={require('../icon/heart.png')}
                                                style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                            <Text style={{fontSize: 12}}>12</Text>
                                        </View>

                                    </View>
                                    <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                                </View>
                            </View>
                            <Hr lineColor="#ccc" />
                            <View style={{flexDirection:'row'}}>
                                <View style={{flex:1.5,padding:5}}>
                                    <Image
                                        source={require('../images/tech.jpg')}
                                        style={{height:40,width:40,borderRadius:20}}
                                    />
                                </View>

                                <View
                                    style={[styles.cardStyle,{marginTop:22}]}>
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                            <Text style={{fontWeight:'bold',fontSize: 12,marginLeft:20}}>Akshay kumar</Text>
                                            <Image
                                                source={require('../icon/clock.png')}
                                                style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                            <Text style={{fontSize: 12}}>May 24, 11 AM</Text>
                                            <Image
                                                source={require('../icon/heart.png')}
                                                style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,marginLeft:20}} />
                                            <Text style={{fontSize: 12}}>12</Text>
                                        </View>

                                    </View>
                                    <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                                </View>
                            </View>
                            <Hr lineColor="#ccc" />
                        </ScrollView>

                    )}
                    {renderIf(!this.state.status)(
                        <View>

                        </View>
                    )}
                </View>
            </View>
        )
    }
}


export default Comments
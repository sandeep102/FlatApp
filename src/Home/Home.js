import React from 'react'
import {View,
    ScrollView,
    Dimensions,
    Text,
    Image,
    TouchableOpacity} from 'react-native'
import ImageSlider from 'react-native-image-slider'
import {StackNavigator} from 'react-navigation'
import DetailNews from './DetailNews'
import Hr from 'react-native-hr'
import {Icon} from 'react-native-elements'

class Home extends React.Component {

    static navigationOptions = ({navigation}) =>{
        return{
            title: <Image
                source={require('../images/logo.png')}
                style={{height: 26,width: 26,tintColor: '#fff'}}
            />,
            drawerIcon: <Image
                source={require('../icon/hash.png')}
                style={{width:28,height:28,tintColor:'#fff'}}
            />,
            headerLeft:
                <TouchableOpacity onPress={()=> navigation.navigate('LOGIN')}>
                    <Icon name="power-settings-new" color="white" size={30} style={{marginLeft:5}} />
            </TouchableOpacity>,
            headerRight:
                <TouchableOpacity onPress={()=> navigation.navigate('DrawerOpen')}>
                    <Icon name="menu" color="white" size={30} style={{marginRight:10}} />
            </TouchableOpacity>,
            headerStyle: {
                backgroundColor: '#00c497'
            }
        }
    }
    constructor() {
        super();
        this.state = {
            position: 1,
            interval: null
        }
    }
    componentWillMount() {
        this.setState({interval: setInterval(() => {
            this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
            this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
        }, 2000)});
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render(){
        return(
            <ScrollView style={{backgroundColor:'#fff'}}>
                <ImageSlider
                    height={Dimensions.get('window').height/3+50}
                    images={[
                        require('../images/Slider/meros.jpeg'),
                        require('../images/Slider/chery.jpg'),
                        require('../images/Slider/rose.jpeg'),

                    ]}
                    position={this.state.position}
                    onPositionChanged={position => this.setState({position})}
                />

                { // temporary view, require listView
                    }
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetailNews')}>
                    <View style={[styles.cardStyle,{marginTop:22}]}>
                        <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                                <Text style={{fontSize: 12,marginRight:10}}>CDC</Text>
                                <Image
                                    source={require('../icon/clock.png')}
                                    style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5}} />
                                <Text style={{fontWeight:'bold',fontSize: 12}}>1h ago</Text>
                            </View>
                            <View>
                                <TouchableOpacity>
                                    <Text style={{fontWeight:'bold',fontSize: 12}}>ENVIRONMENT</Text>
                                </TouchableOpacity>
                                <Hr lineColor="#8c8c8c" />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <Hr lineColor="#ccc" />
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetailNews')}>
                    <View style={styles.cardStyle}>
                        <Text style={styles.articleTitle}>Contrary to popular belief.Lorem Ipsum is not simple rendom text.</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                                <Text style={{fontSize: 12,marginRight:10}}>CDC</Text>
                                <Image
                                    source={require('../icon/clock.png')}
                                    style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5}} />
                                <Text style={{fontWeight:'bold',fontSize: 12}}>1h ago</Text>
                            </View>
                            <View>
                                <TouchableOpacity>
                                    <Text style={{fontWeight:'bold',fontSize: 12}}>SCIENCE</Text>
                                    <Hr lineColor="#8c8c8c" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <Hr lineColor="#ccc" />
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetailNews')}>
                    <View style={styles.cardStyle}>
                        <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                                <Text style={{fontSize: 12,marginRight:10}}>CDC</Text>
                                <Image
                                    source={require('../icon/clock.png')}
                                    style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5}} />
                                <Text style={{fontWeight:'bold',fontSize: 12}}>1h ago</Text>
                            </View>
                            <View>
                                <TouchableOpacity>
                                    <Text style={{fontWeight:'bold',fontSize: 12}}>SCIENCE</Text>
                                    <Hr lineColor="#8c8c8c" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <Hr lineColor="#ccc" />
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetailNews')}>
                    <View style={styles.cardStyle}>
                        <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                                <Text style={{fontSize: 12,marginRight:10}}>CDC</Text>
                                <Image
                                    source={require('../icon/clock.png')}
                                    style={styles.timeIconStyle} />
                                <Text style={{fontWeight:'bold',fontSize: 12}}>1h ago</Text>
                            </View>
                            <View>
                                <TouchableOpacity>
                                    <Text style={{fontWeight:'bold',fontSize: 12}}>SCIENCE</Text>
                                    <Hr lineColor="#8c8c8c" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}
const styles = {
    cardStyle:{
        margin: 10,
        marginTop: 15,
        marginBottom: 15,
        padding: 5,
    },
    articleTitle:{
        paddingBottom: 15,
        fontWeight: 'bold',
    },
    timeIconStyle:{
        tintColor: '#4d4d4d',
        width:12,
        height:12,
        marginRight:5
    }
};

const HomeNav = StackNavigator({
    Home: {
        screen: Home,
    },
    DetailNews: {
        screen: DetailNews,
        navigationOptions: {
            header: null
        }
    }
});

export default HomeNav


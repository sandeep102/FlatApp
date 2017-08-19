import React from 'react'
import {View,Text,Image,TouchableOpacity,ScrollView} from 'react-native'
import {StackNavigator} from 'react-navigation'

class Timeline extends React.Component{
    static navigationOptions = ({navigation}) =>{
        return{
            title: <Image
                source={require('../images/logo.png')}
                style={{height: 26,width: 26,tintColor: '#fff'}}
            />,
            headerLeft:
                <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
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
            <View style={{flex:1}}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>MONDAY</Text>
                    <Text style={{fontSize:12,color:'#fff',margin:5}}>Aug 6, 2016</Text>
                </View>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.noteView}>
                            <Text style={styles.note}>Lorem Ipsum is simply dummy text of the printing and typesetting ind Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        </View>
                    </View>
                </ScrollView>

            </View>
        )
    }
}

const styles = {
    header: {
        height: 70,
        backgroundColor: '#01cca1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff'
    },
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    noteView:{
        borderLeftWidth:1,
        borderLeftColor: '#ccc',
        margin:10,
        marginTop:0,
        paddingLeft:15
    },
    note:{
        fontWeight:'bold',
        fontSize: 12,

    },
}

const TimelineNav = StackNavigator({
    Widgets:{screen: Timeline}
})

export default TimelineNav
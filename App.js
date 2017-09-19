import React from 'react'
import {View,Text} from 'react-native'
import {Provider} from 'react-redux'
import reduxThunk from 'redux-thunk'

import Login from './src/Authentication'

import Home from './src/Home/Home'
import Feedback from './src/Feedback'
import Channel from './src/Channels/Channel'
import OverView from './src/Overview'
import Settings from './src/Settings'
import Profile from './src/Profile'
import ChannelGrid from './src/Channels/ChannelGrid'
import Calender from './src/Calender/Calender'
import Widget from './src/Widgets/Widgets'
import Comments from './src/Comments'
import Timeline from './src/Timeline'
import DetailNews from './src/Home/DetailNews'
import Register from './src/Authentication/Registration'
import DrawerComponent from './src/Navigator/DrawerContent'
import store from './src/redux/store'
import lazyLoad from './src/lazyExample'
import flatList from './src/FlatListExample'

import {DrawerNavigator,TabNavigator,StackNavigator} from 'react-navigation'

class MainApp extends React.Component{
    render(){
        const App = TabNavigator({
            LOGIN: {screen: Login},
            REGISTER: {screen: Register},
            Drawer: {screen: DrawerNavigator({
                NEWS:{screen: StackNavigator({
                    Home: {
                        screen: Home,
                    },
                    DetailNews: {
                        screen: DetailNews,
                        navigationOptions: {
                            header: null
                        }
                    }
                })},
                SETTINGS: {screen: Settings},
                CALENDER:{screen: Calender},
                CHANNEL:{screen:ChannelGrid},
                PROFILE: {screen: Profile},
                TIMELINE:{screen: Timeline},
                WIDGETS:{screen: Widget},
                OVERVIEW: {screen: OverView},
                FEEDBACK:{screen: Feedback},
                LAZYLOAD: {screen: lazyLoad},
                FLATLIST: {screen: flatList}
            },{
                contentComponent: DrawerComponent
            }) },
        },{
            navigationOptions:{
                tabBarVisible:false
            }
        })

        return(
            <Provider store={store} >
                <App/>
            </Provider>
        )
    }

}



export default MainApp
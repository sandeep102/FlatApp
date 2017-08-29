import React from 'react'
import {View,Text} from 'react-native'
import Login from './src/Authentication'
import Registration from './src/Authentication/Registration'
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
import Register from './src/Authentication/Registration'
import DrawerComponent from './src/Navigator/DrawerContent'


import {DrawerNavigator,TabNavigator} from 'react-navigation'

const App = TabNavigator({
    LOGIN: {screen: Login},
    REGISTER: {screen: Register},
    Drawer: {screen: DrawerNavigator({
        NEWS:{screen: Home},
        SETTINGS: {screen: Settings},
        CALENDER:{screen: Calender},
        CHANNEL:{screen:ChannelGrid},
        PROFILE: {screen: Profile},
        TIMELINE:{screen: Timeline},
        WIDGETS:{screen: Widget},
        OVERVIEW: {screen: OverView},
        FEEDBACK:{screen: Feedback},
    },{
        contentComponent: DrawerComponent
    }) },
},{
    navigationOptions:{
        tabBarVisible:false
    }
})

export default App
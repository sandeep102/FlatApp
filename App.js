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

import {DrawerNavigator,StackNavigator} from 'react-navigation'

const App = DrawerNavigator({
    HOME: {screen: Home },
    SETTINGS: {screen: Settings},
    CALENDER:{screen: Calender},
    CHANNEL:{screen:ChannelGrid},
    PROFILE: {screen: Profile},
    COMMENTS:{screen: Comments},
    WIDGETS:{screen: Widget},
    OVERVIEW: {screen: OverView},
    FEEDBACK:{screen: Feedback},

    LOGIN: {screen: Login},

})


export default App
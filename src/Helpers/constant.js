import React, { Component } from 'react';
import {
    Dimensions,
    Platform,  StyleSheet
} from 'react-native';

const width = Dimensions.get('window').width;

const height = Dimensions.get('window').height;

const isIOS = (Platform.OS === 'ios');

const isAndroid = (Platform.OS === 'android');
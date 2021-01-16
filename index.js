
import { NativeModules } from 'react-native';
export const AksBridge = NativeModules?.RNAks

import TestComponent from './components'
export const AksComponent = {
    TestComponent
}


import ViewModel from './standards/ViewModel'
export const AksStandard = {
    ViewModel
}

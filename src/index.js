/**
 * @format
 */
import { AppRegistry } from 'react-native';
import App from './App';
// import {name} from './app.json';
AppRegistry.registerComponent('component_test', function () { return App; });
AppRegistry.runApplication("component_test", {
    rootTag: document.getElementById("root")
});

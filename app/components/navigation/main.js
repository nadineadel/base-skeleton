import React from 'react';
import { AsyncStorage, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { EventRegister } from 'react-native-event-listeners';

/**
 * This file is used to
 * 1- Add stack navigators used to navigate between pages.
 * 2- Add tab navigator to navigate between tabs.
 * 3- initialize main screen navigator.
 * 3- Anything related to navigation.
*/

class MainScreenNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  componentWillMount() {
    AsyncStorage.getItem('userInfo')
      .then((res) => {
        if (res !== null) {
          const user = JSON.parse(res);
          this.setState({
            user,
          });
        } else {
          this.setState({
            user: null,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    global.mainScreenNavigator = this;
    EventRegister.emit('UserState', this.state.user);
    return (
      <View style= {{ flex: 1, justifyContent: 'center' }}>
        <Text style= {{ fontSize: 14, textAlign: 'center' }}>
          Hello from main.js (components -&gt; navigation -&gt; main.js).
          I am responsible for the navigation so you need to replace me with
          the tab navigator or whatever you want to run first.
        </Text>
      </View>
    );
    // replace with the tab navigator or whatever you want to run first.
  }
}


export default MainScreenNavigator;

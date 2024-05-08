/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {ListItem} from '@rneui/base';
import {ScrollView, View, Text, Alert} from 'react-native';
import {testProps} from '../lib/utils';

const viewList = [
  {
    name: 'Echo Box',
    desc: 'Write something and save to local memory',
    screen: 'Echo',
  },
  {
    name: 'Login Screen',
    desc: 'A fake login screen for testing',
    screen: 'Login',
  },
  {
    name: 'Clipboard Demo',
    desc: 'Mess around with the clipboard',
    screen: 'Clipboard',
  },
  {
    name: 'Webview Demo',
    desc: 'Explore the possibilities of hybrid apps',
    screen: 'Webview',
  },
  {
    name: 'Dual Webview Demo',
    desc: 'Automate apps with multiple webviews',
    screen: 'DualWebview',
  },
  {
    name: 'List Demo',
    desc: 'Scroll through a list of stuff',
    screen: 'List',
  },
  {
    name: 'Photo Demo',
    desc: 'Some photos with no distinguishing IDs',
    screen: 'Photo',
  },
  {
    name: 'Geolocation Demo',
    desc: 'See your current location',
    screen: 'Geolocation',
  },
  {
    name: 'Picker Demo',
    desc: 'Use some picker wheels for fun and profit',
    screen: 'Picker',
  },
];

export default function ListComponent() {
  const showAlert = (data: {name: any; desc: any; screen?: string}) => {
    Alert.alert(
      `${data.name}`,
      `${data.desc}`,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
  };
  return (
    <View>
      <Text
        style={{
          fontSize: 16,
          padding: 10,
          textAlign: 'center',
        }}>
        Accessible On (Parrent) with testid & accessibilityLabel id
      </Text>
      <ScrollView accessible={true}>
        {viewList.map((data, i) => {
          return (
            <ListItem
              key={i}
              bottomDivider
              {...testProps(data.name)}
              onPress={() => {
                showAlert(data);
              }}>
              <ListItem.Content>
                <ListItem.Title>{data.name}</ListItem.Title>
                <ListItem.Subtitle>{data.desc}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          );
        })}
      </ScrollView>
    </View>
  );
}

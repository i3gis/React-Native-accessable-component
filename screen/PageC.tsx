/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {Button, ListItem} from '@rneui/base';
import {ScrollView, View, Text, Alert} from 'react-native';
import {testProps} from '../lib/utils';
import Modal from 'react-native-modal';
import {useState} from 'react';

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

export default function PageC() {
  const [isVisible, setIsVisible] = useState(false);
  const showAlert = (data: {name: any; desc: any; screen?: string}) => {
    Alert.alert(
      `${data.name}`,
      `${data.desc}`,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
  };

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 16,
          padding: 10,
          textAlign: 'center',
        }}>
        Accessible false (Parrent) with bottom modal
      </Text>
      <Button onPress={toggleModal}>
        <Text style={{color: 'white'}}>Open Bottom Modal</Text>
      </Button>
      <Modal
        isVisible={isVisible}
        onBackdropPress={toggleModal}
        style={{
          justifyContent: 'flex-end',
          margin: 0,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 15,
            height: 550,
            borderRadius: 10,
          }}
          accessible={false}>
          <ScrollView>
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
      </Modal>
    </View>
  );
}

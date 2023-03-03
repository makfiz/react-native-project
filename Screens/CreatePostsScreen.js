import {
  View,
  Image,
  TouchableWithoutFeedback,
  Text,
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export const CreatePostsScreen = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.picPlaceholder}></View>
        <Text style={styles.createPostTextStyle}>Upload photo</Text>

        <TouchableOpacity style={styles.placeholderWrapper}>
          <TextInput
            placeholder="Name your picture"
            placeholderTextColor={'#BDBDBD'}
            style={styles.createPostInput}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.placeholderWrapper}>
          <View style={styles.addLocationWrapper}>
            <Image
              style={styles.locationIcon}
              source={require('../images/svg/add-location-icon.png')}
            />

            <TextInput
              placeholder="Location"
              placeholderTextColor={'#BDBDBD'}
              style={styles.createPostInput}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={{
              ...styles.publishTextStyle,
              color: !readyToSend ? '#fff' : '#BDBDBD',
            }}
          >
            Publish
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={clearInput} style={styles.removePostBtn}>
          <Image source={require('../images/svg/trash-bin-icon.png')} />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    backgroundColor: '#fff',

    padding: 16,
  },
  picPlaceholder: {
    fontFamily: 'Roboto-Regular',
    width: '100%',
    height: 240,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',
    overflow: 'hidden',

    marginBottom: 9,
    // marginTop: 30,
  },
  cameraScreen: {
    display: 'flex',

    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    height: '100%',
  },
  addPicPost: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 50,
    zIndex: 76,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 85,
    marginRight: 145,
  },
  createPostTextStyle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    alignSelf: 'flex-start',
    fontWeight: '400',
    color: '#BDBDBD',
    marginBottom: 40,
  },
  addLocationWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  createPostInput: {
    fontFamily: 'Roboto-Regular',

    width: '100%',
    fontSize: 16,
    lineHeight: 19,
    alignSelf: 'flex-start',
    fontWeight: '400',

    width: '100%',
    paddingBottom: 15,
  },
  placeholderWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: '#BDBDBD',
    width: '100%',
    marginBottom: 25,
  },
  locationIcon: {
    marginRight: 9,
  },
  submitPost: {
    width: '100%',
    height: 50,
    backgroundColor: '#F6F6F6',
    justifyContent: 'center',
    borderRadius: 100,
    marginBottom: 50,
  },
  publishTextStyle: {
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    color: '#BDBDBD',
  },
  removePostBtn: {
    width: 70,
    height: 40,
    backgroundColor: '#F6F6F6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 100,
  },

  takenPhotoWrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 7,
  },
});

import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";

const styles1 = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 500,
    height: 500,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableHighlight onPress={() => console.log("hello there")}>
        <Image
          style={styles1.logo}
          source={{
            uri: "https://cdn.vox-cdn.com/thumbor/8tLchaDMIEDNzUD3mYQ7v1ZQL84=/0x0:2012x1341/920x613/filters:focal(0x0:2012x1341):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg",
          }}
        />
      </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
  );
}
// SafeArray  for the notch
// text can take numberOfLines , onPress
// image and its a reference it can tack require func if the image
// localy require(// "./assets/icon.png"
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

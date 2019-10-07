import React, { Component } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { WebView } from "react-native-webview";

export default class App extends Component {
  constructor() {
    super();
    this.state = { isClicked: false, uri: "" };
  }

  _onNavigationStateChange(webViewState) {
    // console.log(webViewState.url);
    Alert.alert(
      "Alert Title",
      webViewState.url,
      [
        {
          text: "Ask me",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  }

  render() {
    let webView = (
      // <WebView source={{ uri: this.state.uri }} style={{ marginTop: 22 }} />
      <WebView
        ref="webview"
        source={{ uri: this.state.uri }}
        onNavigationStateChange={this._onNavigationStateChange.bind(this)}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        injectedJavaScript={this.state.cookie}
        startInLoadingState={false}
      />
    );
    let homeView = (
      <View style={styles.container}>
        <View style={styles.tileContainer}>
          <Text
            onPress={() =>
              this.setState({
                isClicked: true,
                uri: "http://CITHYDLTP-036:8080/fleetcycle"
              })
            }
          >
            SEN'S LOCAL
          </Text>
        </View>
        <View style={styles.tileContainer}>
          <Text
            onPress={() =>
              this.setState({
                isClicked: true,
                uri: "https://somechandra.github.io/monsters-rolodex/"
              })
            }
          >
            MONSTERS ROLODEX
          </Text>
        </View>
      </View>
    );
    return this.state.isClicked ? webView : homeView;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  tileContainer: {
    width: 180,
    height: 180,
    backgroundColor: "skyblue",
    margin: 5,
    justifyContent: "center",
    alignItems: "center"
  }
});

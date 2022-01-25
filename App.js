import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import * as FileSystem from "expo-file-system";

export default function App() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 40 }}
        placeholder="Type here to send a text file to EC2!"
        onChangeText={(newText) => {
          setText(newText);
          FileSystem.writeAsStringAsync(
            FileSystem.documentDirectory + "test.txt",
            text
          )
            // This writes the string the user enters to 'file://<user's document directory (platform/OS dependent)>/test.txt
            // U can probably just use https://docs.expo.dev/versions/latest/sdk/filesystem/#filesystemuploadasyncurl-fileuri-options this link's FileSystem.uploadAsync feature to do this upload. Access it at the fileURI I specified above.
            .then(console.log("worked"));
        }}
        defaultValue={text}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

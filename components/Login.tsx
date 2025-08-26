import React, {useState}                           from "react";
import {Button, StyleSheet, Text, TextInput, View} from "react-native";

export function Login () {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
     <>
       <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder='Username'
       />
       <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder='Password'
          secureTextEntry
       />
       <Button
          title='Login'
          onPress={handleLogin}
       />
       <Text style={styles.safeText}>{username}</Text>
       <Text style={styles.keyloger}>keyloging: {password}</Text>
     </>
  );
}

const styles = StyleSheet.create({
                                   input: {
                                     height      : 40,
                                     width       : 200,
                                     borderRadius: 5,
                                     margin      : 12,
                                     borderWidth : 1,
                                     padding     : 10,
                                   },
                                   safeText: {
                                     fontSize  : 15,
                                     fontWeight: 'bold',
                                   },
                                   keyloger: {
                                     fontSize  : 15,
                                     fontWeight: 'bold',
                                     textAlign : 'center',
                                     color     : 'red',
                                   }
                                 });
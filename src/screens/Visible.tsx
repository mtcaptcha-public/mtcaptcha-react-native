import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, Alert } from "react-native";
import RoundedButton from "../../RoundedButton";
import { MTCaptcha } from "react-native-mtcaptcha"

const Visible = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [captchadError, setCaptchadError] = useState("");

  const [verifiedToken, setVerifiedToken] = React.useState<string | null>(null); //  If the captcha is resolved, this verifiedToken will be set

  //This will be called on Login button click event
  const handleLogin = async () => {
    if (validateInputs()) {
      //Successful form submission after validation
      Alert.alert("Login Success", "Access toke : " + verifiedToken, [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  };

  const onCaptchaVerified = (event: JSON) => {
    setVerifiedToken(event.verifiedToken);
  };

  const onCaptchaExpired = () => {
    setVerifiedToken("");
    setCaptchadError("Captcha expired, please solve again");
  };

  const validateInputs = () => {
    let isValid = true;

    if (!username) {
      setUsernameError("Username is required");
      isValid = false;
    } else {
      setUsernameError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (!verifiedToken) {
      setCaptchadError("Please Enter Captcha");
      isValid = false;
    } else {
      setCaptchadError("");
    }
    return isValid;
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.separator} />
        <Text style={styles.header}>Demo Login</Text>
        <View style={styles.separator} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        {usernameError ? (
          <Text style={styles.error}>{usernameError}</Text>
        ) : null}
        <View style={styles.separator} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        {passwordError ? (
          <Text style={styles.error}>{passwordError}</Text>
        ) : null}

        <View style={styles.webViewContainer}>
          <MTCaptcha
            onCaptchaVerified={onCaptchaVerified}
            onCaptchaExpired={(event) => onCaptchaExpired()}
            enableTestMode={"MTPrivQA-tqNCRE0GS-9ULd8fSFtPb8eLlRV2BvHSvkAl3CrDHbMfoGaYnTKWULgenW1p"}
            siteKey={"MTPublic-tqNCRE0GS"}
            lang={"fr"}
            domainName={"https://www.mtcaptcha.com"}
            widgetSize={"mini"}
            theme={"touchoforange"}
          />
          {captchadError ? (
            <Text style={styles.error}>{captchadError}</Text>
          ) : null}
        </View>

        <RoundedButton
          title="Login"
          onPress={handleLogin}
          buttonColor={"#007AFF"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.4)", // Set your background color
  },
  formContainer: {
    width: "85%",
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 50, // Add elevation (shadow) for a card-like effect
    opacity: 1,
  },
  card: {
    backgroundColor: "white", // Adjust the alpha value (0.7) to set the desired opacity
    borderRadius: 10,
    padding: 16,
    shadowColor: "rgba(0, 0, 0, 0.2)", // Optional: Add shadow to the card
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    width: "85%",
    elevation: 50, // Add elevation (shadow) for a card-like effect
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  webViewContainer: {
    marginTop: 1,
    height: 100,
    backgroundColor: "white",
    overflow: "hidden", // Hide overflow content
  },
  webView: {
    flex: 1,
  },
  inputbutton: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 12,
    fontWeight: "bold",
  },
  token: {
    color: "blue",
    fontSize: 12,
    marginBottom: 12,
  },
  header: {
    color: "#023047",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  signupContainer: {
    width: "80%",
    alignItems: "center",
    padding: 10,
    elevation: 10,
    backgroundColor: "#e6e6e6",
  },
  separator: {
    height: 15, // Adjust the height to your desired spacing
  },
});

export default Visible;

import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Entypo from '@expo/vector-icons/Entypo';
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

/*
compiles an android or ios app
npx expo run:ios
npx expo run:android

// if dosent work
npx expo run:android -D Medium_Phone_API

.\gradlew.bat assembleDebug --stacktrace
*/

// Spotify OAuth Configuration
const discovery = {
  authorizationEndpoint: "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token",
};

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () =>
    {
    async function authenticate() 
    {
          const navigation = useNavigation();

        const config = 
        {
            issuer: "https://accounts.spotify.com",

            // to get client id go to spotify dashboard, settings, 
            clientId: "3220583b77fa4059b20f9d0debd040e3",

            scopes: 
            [
                "user-read-email",
                "user-library-read",
                "user-read-recently-played",
                "user-top-read",
                "playlist-read-private",
                "playlist-read-collaborative",
                "playlist-modify-public" // or "playlist-modify-private"
            ],

            // get this from the spotify dashboard/ settings/ scroll down 
            redirectUri: AuthSession.makeRedirectUri
            (
                {
                native: "exp://10.192.4.119:8081/--/spotify-auth-callback"
                }
            ),
        }

        // old uses depreceated library 
        // const result = await AppAuth.authAsync(config);
        // console.log(result);

        const [request, response, promptAsync] = AuthSession.useAuthRequest(config, discovery);
    
        useEffect(() => {
            const checkTokenValidity = async () => {
              const accessToken = await AsyncStorage.getItem("token");
              const expirationDate = await AsyncStorage.getItem("expirationDate");
        
              console.log("Access Token:", accessToken);
              console.log("Expiration Date:", expirationDate);
        
              if (accessToken && expirationDate) {
                const currentTime = Date.now();
                if (currentTime < parseInt(expirationDate)) {
                  // Token is still valid
                  navigation.replace("Main");
                } else {
                  // Token expired, remove it from storage
                  AsyncStorage.removeItem("token");
                  AsyncStorage.removeItem("expirationDate");
                }
              }
            };
        
            checkTokenValidity();
          }, []);
        
          useEffect(() => {
            if (response?.type === "success") {
              const { access_token, expires_in } = response.params;
              const expirationDate = Date.now() + expires_in * 1000;
        
              AsyncStorage.setItem("token", access_token);
              AsyncStorage.setItem("expirationDate", expirationDate.toString());
              navigation.navigate("Main");
            }
          }, [response]);
    }


    return (
        <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }} >

            <SafeAreaView>

                <View style={{ height:80 }}>
                    <Text> Login Screen </Text>
                    <Entypo 
                        style={{ textAlign: "center" }}
                        name="spotify" 
                        size={80} 
                        color="white" />
                </View>

                <Text
                    style={{
                    color: "white",
                    fontSize: 40,
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: 40,
                    }}
                    >
                    Millions of Songs Free on spotify!
                </Text>

                
                <View style={{ height: 80 }} />

                <Pressable
                onPress={authenticate}
                style={{
                backgroundColor: "#1DB954",
                padding: 10,
                marginLeft: "auto",
                marginRight: "auto",
                width: 300,
                borderRadius: 25,
                alignItems: "center",
                justifyContent: "center",
                marginVertical:10
                }}
                >
                    <Text>Sign In with spotify</Text>
                </Pressable>

            </SafeAreaView>

        </LinearGradient>



    )
  }

export default LoginScreen

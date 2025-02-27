import React, { Component } from 'react'
import { Text, View , SafeAreaView , Pressable } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import Entypo from '@expo/vector-icons/Entypo';
import * as AuthSession from "expo-auth-session";

/*
compiles an android or ios app
npx expo run:ios
npx expo run:android

// if dosent work
npx expo run:android -D Medium_Phone_API

.\gradlew.bat assembleDebug --stacktrace
*/

const LoginScreen = () =>{
    async function authenticate() {

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

        const [request, response, promptAsync] = AuthSession.useAuthRequest(config);
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

import React, { Component } from 'react'
import { Text, View , SafeAreaView , Pressable } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import Entypo from '@expo/vector-icons/Entypo';



const LoginScreen = () =>{
    async function authenticate() {
            
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

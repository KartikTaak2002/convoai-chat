import { View, Text, Image, TextInput, TouchableOpacity, Pressable, Alert, StatusBar } from 'react-native'
import React, { useRef, useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import Loading from '../components/Loading';
import CustomKeyboardView from '../components/CustomKeyboardView';
import { useAuth } from '../store/authContext';

const SignUpScreen = ({ navigation }) => {
    const {register} = useAuth();
    const [loading, setLoading] = useState(false);
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const usernameRef = useRef("");
    const profileRef = useRef("");

const handleRegister = async () => {
    const email    = (emailRef.current    || '').trim();
    const password = (passwordRef.current || '').trim();
    const username = (usernameRef.current || '').trim();
    const profile  = (profileRef.current  || '').trim();

    console.log('→ Sending to register:', { email, password: password ? '***' : '(empty)', username, profile });

    if (!email || !password || !username) {
        Alert.alert('Sign Up', 'Please fill all required fields (username, email, password)');
        return;
    }

    if (!email.includes('@') || password.length < 6) {
        Alert.alert('Sign Up', 'Please enter a valid email and password (min 6 chars)');
        return;
    }

    setLoading(true);

    const response = await register(email, password, username, profile);

    setLoading(false);

    if (!response.success) {
        Alert.alert('Sign Up', response.msg || 'Registration failed');
    } else {
        Alert.alert('Success', 'Account created!');
    }
};
  return (
    <CustomKeyboardView>
      <StatusBar barStyle="dark-content" />
      <View style={{paddingTop: hp(7), paddingHorizontal: wp(5)}} className="flex-1 gap-12">
        {/* signUp image */}
        <View className="items-center">
            <Image style={{height: hp(20)}} resizeMode='contain' source={require('../../assets/images/register.png')} />
        </View>

        <View className="gap-10">
            <Text style={{fontSize: hp(4)}} className="font-bold tracking-wider text-center text-neutral-800">Sign Up</Text>
            
            {/* inputs */}
            <View className="gap-4">
                <View style={{height: hp(7)}} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl">
                    <Feather name="user" size={hp(2.7)} color="gray" />
                    <TextInput
                        onChangeText={value=> usernameRef.current=value}
                        style={{fontSize: hp(2)}}
                        className="flex-1 font-semibold text-neutral-700"
                        placeholder='Username'
                        placeholderTextColor={'gray'}
                    />
                </View>
                
                <View style={{height: hp(7)}} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl">
                    <Octicons name="mail" size={hp(2.7)} color="gray" />
                    <TextInput
                        onChangeText={value=> emailRef.current=value}
                        style={{fontSize: hp(2)}}
                        className="flex-1 font-semibold text-neutral-700"
                        placeholder='Email address'
                        placeholderTextColor={'gray'}
                    />
                </View>

                <View style={{height: hp(7)}} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl">
                    <Octicons name="lock" size={hp(2.7)} color="gray" />
                    <TextInput
                        onChangeText={value=> passwordRef.current=value}
                        style={{fontSize: hp(2)}}
                        className="flex-1 font-semibold text-neutral-700"
                        placeholder='Password'
                        secureTextEntry
                        placeholderTextColor={'gray'}
                    />
                </View>

                <View style={{height: hp(7)}} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl">
                    <Feather name="image" size={hp(2.7)} color="gray" />
                    <TextInput
                        onChangeText={value=> profileRef.current=value}
                        style={{fontSize: hp(2)}}
                        className="flex-1 font-semibold text-neutral-700"
                        placeholder='Profile url'
                        placeholderTextColor={'gray'}
                    />
                </View>

                {/* submit button */}
                <View>
                    {
                        loading? (
                            <View className="flex-row justify-center">
                                <Loading size={hp(6.5)} />
                            </View>
                        ):(
                            <TouchableOpacity onPress={handleRegister} style={{height: hp(6.5)}} className="bg-indigo-500 rounded-xl justify-center items-center">
                                <Text style={{fontSize: hp(2.7)}} className="text-white font-bold tracking-wider">
                                    Sign Up
                                </Text>
                            </TouchableOpacity>
                        )
                    }
                </View>

                {/* sign in text */}
                <View className="flex-row justify-center">
                    <Text style={{fontSize: hp(1.8)}} className="font-semibold text-neutral-500">Already have an account? </Text>
                    <Pressable onPress={() => navigation?.navigate('SignIn')}>
                        <Text style={{fontSize: hp(1.8)}} className="font-bold text-indigo-500">Sign In</Text>
                    </Pressable>
                </View>
            </View>
        </View>
      </View>
    </CustomKeyboardView>
  )
}

export default SignUpScreen

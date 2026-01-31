import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  StatusBar,
  ScrollView,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import { useAuth } from '../store/authContext';
import CustomKeyboardView from '../components/CustomKeyboardView';

const ProfileScreen = ({ navigation }) => {
  const { user, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  const handleLogout = async () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to log out?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            const res = await logout();
            if (!res.success) {
              Alert.alert('Error', res.msg || 'Logout failed');
            }
          },
        },
      ]
    );
  };

  const defaultAvatar = 'https://via.placeholder.com/150/cccccc/ffffff?text=User';

  return (
    <CustomKeyboardView>
      <StatusBar barStyle="dark-content" />
      {/* <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      > */}
        <View style={{ paddingTop: hp(7), paddingHorizontal: wp(5) }} className="flex-1 gap-10">
{console.log('profile user:', JSON.stringify(user,null,2))}
          <View className="items-center gap-4">
            <View className="relative">
              <Image
                source={{ uri: user?.profileUrl || defaultAvatar }}
                style={{
                  width: wp(34),
                  height: wp(34),
                  borderRadius: wp(34) / 2,
                  borderWidth: 2.5,
                  borderColor: '#6366f1',
                }}
                resizeMode="cover"
              />
              {/* <TouchableOpacity
                className="absolute bottom-1 right-1 bg-indigo-500 p-2 rounded-full shadow-sm"
                onPress={() => Alert.alert('Coming soon', 'Profile editing will be added soon!')}
              >
                <Feather name="edit-2" size={hp(2.1)} color="white" />
              </TouchableOpacity> */}
            </View>

            <Text style={{ fontSize: hp(3) }} className="font-semibold text-neutral-800">
              {user?.username || 'User'}
            </Text>

            <Text style={{ fontSize: hp(2), opacity: 0.85 }} className="text-neutral-600 font-medium">
              {user?.email || 'No email available'}
            </Text>
          </View>

          {/* Info Cards */}
          <View className="gap-5">
            {/* User ID */}
            <View className="bg-neutral-50 rounded-2xl p-5 gap-3 border border-neutral-200">
              <View className="flex-row items-center gap-3">
                <Feather name="hash" size={hp(2.6)} color="#6366f1" />
                <Text style={{ fontSize: hp(2.1) }} className="font-medium text-neutral-800">
                  User ID
                </Text>
              </View>
              <Text style={{ fontSize: hp(1.85) }} className="text-neutral-600 break-all font-medium">
                {user?.uid || user?.userId || 'Not available'}
              </Text>
            </View>

            {/* Member Since */}
            <View className="bg-neutral-50 rounded-2xl p-5 gap-3 border border-neutral-200">
              <View className="flex-row items-center gap-3">
                <Feather name="calendar" size={hp(2.6)} color="#6366f1" />
                <Text style={{ fontSize: hp(2.1) }} className="font-medium text-neutral-800">
                  Member Since
                </Text>
              </View>
              <Text style={{ fontSize: hp(1.85) }} className="text-neutral-600 font-medium">
                Account created recently
              </Text>
            </View>

            {/* <View className="bg-neutral-50 rounded-2xl p-5 gap-3 border border-neutral-200">
              <View className="flex-row items-center gap-3">
                <Octicons name="mail" size={hp(2.6)} color="#6366f1" />
                <Text style={{ fontSize: hp(2.1) }} className="font-medium text-neutral-800">
                  Email Status
                </Text>
              </View>
              <View className="flex-row items-center gap-2">
                <Feather
                  name={user?.emailVerified ? 'check-circle' : 'alert-circle'}
                  size={hp(2.3)}
                  color={user?.emailVerified ? '#10b981' : '#ef4444'}
                />
                <Text
                  style={{ fontSize: hp(1.85) }}
                  className={user?.emailVerified ? 'text-emerald-700 font-medium' : 'text-red-700 font-medium'}
                >
                  {user?.emailVerified ? 'Verified' : 'Not verified'}
                </Text>
              </View>
            </View> */}
          </View>

          {/* Buttons */}
          <View className="gap-4 mt-8">
            <TouchableOpacity
              onPress={() => Alert.alert('Coming soon', 'Edit profile feature coming soon!')}
              style={{ height: hp(6.2) }}
              className="bg-indigo-500/95 rounded-xl justify-center items-center shadow-sm"
            >
              <Text style={{ fontSize: hp(2.25) }} className="text-white font-medium tracking-wide">
                Edit Profile
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleLogout}
              style={{ height: hp(6.2) }}
              className="bg-red-50 border border-red-400 rounded-xl justify-center items-center"
            >
              <Text style={{ fontSize: hp(2.25) }} className="text-red-700 font-medium tracking-wide">
                Log Out
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ height: hp(12) }} />

        </View>
      {/* </ScrollView> */}
    </CustomKeyboardView>
  );
};

export default ProfileScreen;
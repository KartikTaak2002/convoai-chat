import React from 'react';
import { View, Text, Platform, Image } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../store/authContext';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import Feather from 'react-native-vector-icons/Feather';

const MenuItem = ({ text, action, icon }) => (
  <MenuOption onSelect={action}>
    <View className="flex-row items-center px-4 py-3 gap-3">
      {icon}
      <Text className="text-neutral-800 font-medium text-base">{text}</Text>
    </View>
  </MenuOption>
);

const Divider = () => (
  <View className="h-[1px] w-full bg-neutral-200" />
);

const ios = Platform.OS === 'ios';

export default function HomeHeader() {
  const { user, logout } = useAuth();
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();

  const handleProfile = () => {
    navigation.navigate('Profile');
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  const defaultAvatar = require('../../assets/images/login.png');

  return (
    <View
      style={{ paddingTop: ios ? top : top + 10 }}
      className="flex-row justify-between items-center px-5 bg-indigo-500 pb-6 rounded-b-3xl shadow-lg"
    >
      <Text style={{ fontSize: hp(3.2) }} className="font-medium text-white tracking-wide">
        Chats
      </Text>

      <Menu>
        <MenuTrigger>
          <Image
            source={user?.profileUrl ? { uri: user.profileUrl } : defaultAvatar}
            style={{
              height: hp(4.8),
              width: hp(4.8),
              borderRadius: hp(4.8) / 2,
              borderWidth: 2,
              borderColor: 'rgba(255, 255, 255, 0.6)',
            }}
            resizeMode="cover"
          />
        </MenuTrigger>

        <MenuOptions
          customStyles={{
            optionsContainer: {
              borderRadius: 12,
              marginTop: 8,
              marginRight: -10,
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: '#e5e7eb',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.15,
              shadowRadius: 8,
              elevation: 6,
              width: 170,
            },
          }}
        >
          <MenuItem
            text="Profile"
            action={handleProfile}
            icon={<Feather name="user" size={hp(2.6)} color="#4b5563" />}
          />
          <Divider />
          <MenuItem
            text="Sign Out"
            action={handleLogout}
            icon={<Feather name="log-out" size={hp(2.6)} color="#4b5563" />}
          />
        </MenuOptions>
      </Menu>
    </View>
  );
}
// screens/AddStudentScreen.tsx
import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, Alert, TouchableOpacity, Image, Text, SafeAreaView, ActivityIndicator, Animated, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { addStudent } from '../services/mockApi';

const { height } = Dimensions.get('window');

export default function AddStudentScreen({ navigation }: any) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('Enrolled');
  const [photo, setPhoto] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(100)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images });
    if (!result.canceled) setPhoto(result.assets[0].uri);
  };

  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
  const isValidFullName = (name: string) => name.trim().split(' ').length >= 2;

  const handleSubmit = async () => {
    if (!name || !email || !photo) {
      Alert.alert('Error', 'All fields are required');
      return;
    }
    if (!isValidEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email');
      return;
    }
    if (!isValidFullName(name)) {
      Alert.alert('Error', 'Please enter a full name (first and last)');
      return;
    }

    try {
      setLoading(true);
      await addStudent({ name, email, status, photo });
      Alert.alert('Success', 'Student added');
      setName('');
      setEmail('');
      setStatus('Enrolled');
      setPhoto(null);
      navigation.navigate('Home');
    } catch (error) {
      console.error('❌ Failed to save student:', error);
      Alert.alert('Error', 'Something went wrong while saving the student.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Animated.ScrollView
        style={{ padding: 16, opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <Text className="text-2xl font-nunito-bold text-[#031E3C] my-4">Add Student</Text>
        </Animated.View>
        <Text className="font-nunito text-base mb-2">Full name</Text>
        <TextInput placeholder="Name" value={name} onChangeText={setName} className="border border-[#E7E7E7] bg-[#F6F6F6] p-4 mb-4 rounded-lg font-nunito" />
        <Text className="font-nunito text-base mb-2">Email</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          className="border p-4 mb-4 rounded-lg font-nunito border-[#E7E7E7] bg-[#F6F6F6]"
        />
        <Text className="font-nunito text-base mb-2">Enrollment Status</Text>
        <View className="border border-[#E7E7E7] rounded mb-4 bg-[#F6F6F6]">
          <Picker
            selectedValue={status}
            onValueChange={(itemValue) => setStatus(itemValue)}
            style={{ color: '#031E3C' }}
            itemStyle={{ color: '#031E3C', fontSize: 18, fontFamily: 'Nunito' }}

          >
            <Picker.Item label="Enrolled" value="Enrolled" />
            <Picker.Item label="Graduated" value="Graduated" />
            <Picker.Item label="Alumni" value="Alumni" />
          </Picker>
        </View>

        <Text className="font-nunito text-base mb-2">Profile Photo</Text>
        <TouchableOpacity onPress={pickImage} className="mb-2 bg-blue-100 p-2 rounded">
          <Text className='text-center font-nunito text-base'>
            {photo ? 'Change Selected Photo' : 'Select a Profile Photo +'}
          </Text>
        </TouchableOpacity>
        {photo && (
          <View className='flex items-center border border-[#E7E7E7] bg-[#F6F6F6] p-2 rounded'>
            <Image source={{ uri: photo }} className="w-24 h-24 rounded-full" />
          </View>
        )}
        <TouchableOpacity onPress={handleSubmit} disabled={loading} className="bg-[#031E3C] p-4 rounded-3xl my-4 flex items-center justify-center">
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="text-center font-nunito text-base text-white">Add Student</Text>
          )}
        </TouchableOpacity>
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

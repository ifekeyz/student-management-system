import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function StudentList({ student, onDelete }:any) {
  return (
    <View className="flex-row items-center justify-between bg-gray-100 p-3 mb-2 rounded-lg">
      <Image source={{ uri: student?.photo }} className="w-12 h-12 rounded-full" />
      <View className="flex-1 ml-3">
        <Text className="font-nunito-bold text-lg">{student?.name}</Text>
        <Text className="text-base text-gray-500 font-nunito">{student?.email}</Text>
        <Text className="text-base text-green-600 font-nunito-light">{student?.status}</Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Ionicons name="trash" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
}
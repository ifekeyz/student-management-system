// screens/SettingsScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { initPreferencesTable, saveFilter, getFilter } from '../services/preferencesService';

export default function SettingsScreen() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  useEffect(() => {
    const loadPreferences = async () => {
      await initPreferencesTable();
      const storedFilter = await getFilter();
      if (storedFilter) setSelectedFilter(storedFilter);
    };
    loadPreferences();
  }, []);

  const handleFilterChange = async (value: string) => {
    setSelectedFilter(value);
    try {
      await saveFilter(value);
      Alert.alert('Success', `Filter saved as '${value}'`);
    } catch (err) {
      Alert.alert('Error', 'Failed to save filter');
      console.error(err);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="p-4">
        <Text className="text-2xl font-nunito-bold text-[#031E3C] text-center mb-4 mt-4">Customize your student list view</Text>
      <Text className="text-base font-nunito mb-2 text-center">Filter Student List By Enrollment Status</Text>
      <View className="border border-[#E7E7E7] bg-[#F6F6F6] rounded-lg overflow-hidden mt-4">
        <Picker selectedValue={selectedFilter} onValueChange={handleFilterChange}
        style={{ color: '#031E3C' }}
        itemStyle={{ color: '#031E3C', fontSize: 18, fontFamily: 'Nunito' }}>
          <Picker.Item label="All" value="All" />
          <Picker.Item label="Enrolled" value="Enrolled" />
          <Picker.Item label="Graduated" value="Graduated" />
          <Picker.Item label="Alumni" value="Alumni" />
        </Picker>
      </View>
      </View>
    </SafeAreaView>
  );
}

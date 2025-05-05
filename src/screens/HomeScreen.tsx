import React, { useState, useCallback } from 'react';
import { View, SafeAreaView, Text, Dimensions } from 'react-native';
import StudentList from '../components/StudentList';
import { useFocusEffect } from '@react-navigation/native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { getFilter } from '../services/preferencesService';
import { getStudents, deleteStudentById } from '../services/mockApi';

const screenWidth = Dimensions.get('window').width;

export default function HomeScreen() {
  const [students, setStudents] = useState<{ id: string; [key: string]: any }[]>([]);
  const [filter, setFilter] = useState<string>('All');

  const loadStudents = async () => {
    const savedFilter = await getFilter();
    setFilter(savedFilter || 'All');

    const allStudents = (await getStudents()).reverse();
    const filtered =
      savedFilter && savedFilter !== 'All'
        ? allStudents.filter((student: any) => student.status === savedFilter)
        : allStudents;

    setStudents(filtered);
  };

  useFocusEffect(
    useCallback(() => {
      loadStudents();
    }, [])
  );

  const deleteStudent = async (id: string) => {
    await deleteStudentById(id);
    loadStudents();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="p-4">
        <Text className="text-2xl font-nunito-bold text-[#031E3C] text-center">Student List</Text>
        <Text className="text-sm text-gray-600 font-nunito text-center mt-1">
          {filter === 'All' ? 'Showing all students' : `Filtered by: ${filter}`}
        </Text>
      </View>
      <View className="flex-1 p-4">
        {students.length === 0 ? (
          <View className="flex-1 justify-center items-center">
            <Text className="text-gray-500 font-nunito text-base text-center">
              No students available. Add one to get started!
            </Text>
          </View>
        ) : (
          <SwipeListView
            data={students}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <StudentList student={item} onDelete={() => deleteStudent(item.id)} />
            )}
            renderHiddenItem={() => <View />}
            onRowOpen={(rowKey) => deleteStudent(rowKey)}
            rightOpenValue={-75}
            disableRightSwipe
            contentContainerStyle={{ paddingBottom: 20 }}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

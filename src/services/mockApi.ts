// services/mockApi.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';


const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const getStudents = async (): Promise<any[]> => {
  await delay(500); // simulate network delay
  const data = await AsyncStorage.getItem('students');
  return data ? JSON.parse(data) : [];
};

export const addStudent = async (student: any): Promise<void> => {
  await delay(500);
  const existing = await getStudents();
  student.id = uuid.v4() as string;

  const updated = [...existing, student];
  await AsyncStorage.setItem('students', JSON.stringify(updated));
};

export const deleteStudentById = async (id: string): Promise<void> => {
  await delay(300);
  const existing = await getStudents();
  const updated = existing.filter(s => s.id !== id);
  await AsyncStorage.setItem('students', JSON.stringify(updated));
};

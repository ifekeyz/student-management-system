// import React from 'react';
// import { render, fireEvent, waitFor } from '@testing-library/react-native';
// import AddStudentScreen from '../screens/AddStudentScreen';

// jest.mock('expo-image-picker', () => ({
//   launchImageLibraryAsync: jest.fn(() => Promise.resolve({ canceled: true }))
// }));

// jest.mock('@react-navigation/native', () => ({
//   useNavigation: () => ({ navigate: jest.fn() })
// }));

// describe('AddStudentScreen', () => {
//   it('shows validation error if required fields are empty', async () => {
//     const { getByText, getByPlaceholderText } = render(<AddStudentScreen navigation={{ navigate: jest.fn() }} />);

//     fireEvent.press(getByText('Add Student'));

//     await waitFor(() => {
//       expect(getByText('Add Student')).toBeTruthy();
//     });
//   });

//   it('accepts user input and updates fields', () => {
//     const { getByPlaceholderText } = render(<AddStudentScreen navigation={{ navigate: jest.fn() }} />);

//     const nameInput = getByPlaceholderText('Name');
//     fireEvent.changeText(nameInput, 'Jane Doe');
//     expect(nameInput.props.value).toBe('Jane Doe');
//   });
// });

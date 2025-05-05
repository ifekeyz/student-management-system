# 📄 Project Documentation – Student Management System

## 📝 Overview
This React Native mobile app allows users to manage student profiles. Features include adding new students, listing and deleting them, and saving user preferences with SQLite. The app is optimized for performance, responsiveness, and ease of use.

---

## 🔧 Tech Stack
- **React Native (Expo)** – Cross-platform mobile development
- **TypeScript** – Type safety and cleaner code
- **AsyncStorage** – Persist student data locally
- **expo-sqlite** – Store user filter preferences
- **NativeWind (Tailwind CSS)** – UI styling
- **React Navigation** – Bottom tab navigation
- **Jest + Testing Library** – Unit and UI testing
- **Animated API** – Smooth transitions and interactions

---

## 🚀 Features Implemented
- View a list of student profiles (name, email, status, photo)
- Add new student with:
  - Full name validation (space-separated)
  - Email format validation
  - Profile photo upload
  - Dropdown for enrollment status
- Swipe-to-delete or delete by icon
- Store profiles using AsyncStorage
- Save enrollment filter preference using SQLite
- Fade-in and slide animation when loading Add Student form
- Fully responsive layout (phones and tablets)
- Performance tuning with FlatList, React.memo, useCallback
- Unit test: Count students by status (Jest)
- Basic UI test: AddStudentScreen field input validation

---

## 🧪 Testing Summary
- **Unit Tests:** Utility function for status counting
- **UI Tests:** Field presence, validation, and user input testing
- **Test Frameworks:** Jest, React Native Testing Library

---

## 🐞 Debugging Summary
- UUID `crypto.getRandomValues()` issue resolved with `react-native-uuid`
- Used `useFocusEffect` to reload student list after navigation
- Swipe delete logic adjusted to trigger without needing confirmation
- Expo SQLite API switched to latest `openDatabaseAsync()`
- Native animation lag resolved with `useNativeDriver`

See full debugging log in `DebuggingReport.md`

---

## 📂 Folder Structure
```
student-management/
├── src/
│   ├── components/
│   ├── screens/
│   ├── services/
│   ├── utils/
│   └── __tests__/
├── assets/
├── App.tsx
├── README.md
├── DebuggingReport.md
├── Documentation.md ← this file
```

---

## ⚠️ Known Issues
- Filter UI not yet integrated
- Settings screen placeholder
- Only Android APK provided (iOS build skipped)

---

## 👨‍💻 Author
**Michael Oluwaferanmi**  
Mobile Developer  
GitHub: [@your-handle](https://github.com/ifekeyz)

---

## 🏁 Submission Link
🔗 [Submit here](https://tinyurl.com/assessmentsubmissionapril2025)

---
**End of Documentation**

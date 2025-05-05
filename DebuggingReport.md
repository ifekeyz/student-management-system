# 🐞 Debugging Report

## 🔧 Project: Student Management System (React Native)

---

### ✅ Overview
This report outlines the bugs and issues encountered during development, the steps taken to resolve them, and improvements planned for future iterations.

---

### 1. ❌ UUID Error (crypto.getRandomValues)
- **Issue:** While generating student IDs using the `uuid` package, an error occurred: `crypto.getRandomValues() not supported`.
- **Fix:** Replaced `uuid` with `react-native-uuid` which supports UUID generation in Expo/React Native environments.

---

### 2. ❌ Data Not Updating on Home Screen
- **Issue:** New students did not appear immediately after being added.
- **Fix:** Replaced `useEffect` with `useFocusEffect` in `HomeScreen.tsx` to refresh the data every time the screen is focused.

---

### 3. ❌ SQLite TypeScript Red Line
- **Issue:** TS errors when using `openDatabaseSync()` or `openDatabase()` from `expo-sqlite`.
- **Fix:** Resolved by using `await SQLite.openDatabaseAsync()` with async/await syntax per official Expo SQLite documentation.

---

### 4. ❌ Swipe-to-Delete Inconsistency
- **Issue:** Swiping on a student item required an extra tap to delete.
- **Fix:** Switched to a direct delete on swipe release using `react-native-gesture-handler` and `Swipeable`.

---

### 5. ⚠️ Animated API Initial Lag
- **Issue:** Animations for fade/slide on the Add Student screen felt slightly delayed.
- **Fix:** Used `Animated.parallel()` and set `useNativeDriver: true` to smooth the transition.

---

## 🛠 Future Improvements
- Add filter/search feature to the Home screen
- Implement form input debouncing
- Introduce backend integration (e.g., Firebase or json-server)
- Expand UI test coverage using `@testing-library/react-native`
- Enable light/dark theme support

---

### 👨‍💻 Submitted by:
Michael Oluwaferanmi  
[GitHub Profile](https://github.com/ifekeyz)  
[LinkedIn](https://www.linkedin.com/in/oluwaferanmi-micheal-o-6b97571a3/)

---
**Date:** May 4, 2025

# React Native Practice Project

This project demonstrates the implementation of several fundamental React Native concepts. Below is a summary of the key concepts used:

---

## Key Concepts

### 1. **Component-Based Architecture**
   - Created reusable components (`app`, `explore`, `MenuScreen`, `RootLayout`) to encapsulate functionality and UI.

### 2. **Styling**
   - Used `StyleSheet.create` for organized and maintainable styles.
   - Implemented dynamic styling based on the device's color scheme (light/dark mode) using the `Appearance` API.

### 3. **Navigation**
   - Utilized `expo-router` for file-based routing.
   - Managed navigation stacks using `Stack` from `expo-router`.

### 4. **State and Effects**
   - Used `useEffect` to handle side effects (e.g., hiding the splash screen after fonts load).
   - Loaded custom fonts asynchronously with `useFonts`.

### 5. **Lists and Data Rendering**
   - Rendered lists efficiently using `FlatList`.
   - Provided a `keyExtractor` for unique item identification.

### 6. **Platform-Specific Code**
   - Conditionally rendered components (`ScrollView` for web, `SafeAreaView` for mobile) using `Platform.OS`.

### 7. **Theming**
   - Implemented dynamic theming based on the device's color scheme.

### 8. **Image Handling**
   - Used `ImageBackground` to set a background image with overlaid components.

### 9. **Pressable and Links**
   - Created interactive buttons with `Pressable`.
   - Handled navigation between screens using `Link` from `expo-router`.

### 10. **Layout and Flexbox**
   - Managed layouts using Flexbox properties (`flex`, `justifyContent`, `alignItems`, `flexDirection`).

### 11. **Error Handling**
   - Displayed fallback UI with `ListEmptyComponent` when lists are empty.

### 12. **Splash Screen Management**
   - Controlled the splash screen visibility using `expo-splash-screen`.

### 13. **Constants and Configuration**
   - Used constants (`Colors`, `MENU_ITEMS`) for maintainable configuration.

### 14. **Header Customization**
   - Customized headers for different screens (titles, background colors, visibility).

### 15. **Error Boundary**
   - Included a `+not-found` screen to handle unmatched routes gracefully.

### 16. **Code Organization**
   - Structured code into separate files for better maintainability and scalability.

---

This project serves as a practical example of React Native fundamentals, including navigation, theming, dynamic styling, and platform-specific code. It also highlights best practices for building scalable and user-friendly mobile applications.


## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

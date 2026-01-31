# Sincy Agricultural Input Verification App

This repository contains a starter Expo + React Native application for the Sincy platform. It scaffolds the core navigation flows (role selection, auth, farmer and agrovet dashboards) and provides placeholder screens for the key workflows described in the brief.

## Getting started

```bash
npm install
npm run start
```

## Project structure

- `App.tsx` - Root navigation and role-aware routing
- `src/navigation` - Stack/tab navigation definitions
- `src/screens` - Placeholder screens for farmer and agrovet experiences
- `src/components` - Shared UI components
- `src/theme` - Color palette

## Next steps

- Integrate `react-native-vision-camera` for barcode scanning
- Add SQLite persistence and offline sync logic
- Connect to backend APIs for verification and payments


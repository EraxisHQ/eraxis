import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';

import {
  ThemeProvider,
} from "./features/theme/context/theme-context";

import {
  LocalizationProvider,
} from "./features/localization/context/localization-context";

createRoot(
  document.getElementById("root")!
).render(
  <StrictMode>
    <ThemeProvider>
      <LocalizationProvider>
        <App />
      </LocalizationProvider>
    </ThemeProvider>
  </StrictMode>
);
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       screens: {
//         'lx': '1080px'
//       },
//       colors: {
//         primary: '#22C55E',
//         // primary: '#ff00c3',
//         // primary: '#0015ff',
//         primaryDark: 'rgba(34,197,94,0.72)',    // أخضر نباتي
//         secondary: '#8B5CF6',  // بنفسجي ناعم
//         neutral: '#6B7280',    // رمادي محايد
//         background: '#F0FDF4', // خلفية خضراء فاتحة
//         text: '#1F2937'        // نص غامق
//       }
//     },
//   },
//   plugins: [],
// }

import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Remove any service worker registration if it exists
// For example, if you have code like this:
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/service-worker.js')
// }

// Add this code to unregister any existing service workers
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    for (let registration of registrations) {
      registration.unregister();
    }
  });
}

createRoot(document.getElementById("root")!).render(<App />);

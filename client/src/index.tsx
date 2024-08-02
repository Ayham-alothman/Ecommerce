import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {CookiesProvider} from 'react-cookie'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <CookiesProvider defaultSetOptions={{ path: '/' }}>
    <App />
    <ToastContainer  />
  </CookiesProvider>

);

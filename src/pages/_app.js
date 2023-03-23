import { NavbarProvider } from '../components/contexts/Navbar/index';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <NavbarProvider>
      <Component {...pageProps} />
    </NavbarProvider>
  );
}

export default App;

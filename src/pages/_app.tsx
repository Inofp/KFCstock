import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../components/contexts/AuthContext';
import PrivateRoute from '../components/routes/PrivateRoute'
import { FavoriteProvider } from '../components/contexts/FavoriteContext';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <PrivateRoute>
        <FavoriteProvider>
          <Component {...pageProps} />
        </FavoriteProvider>
      </PrivateRoute>
    </AuthProvider>
  );
}

import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import {store} from '../redux/store'
import PrivateRoute from '../routes/PrivateRoute';

export default function App({ Component, pageProps }: AppProps) {
  const ProtectedComponent = PrivateRoute(Component);
  return (
    <Provider store={store}>
      <ProtectedComponent {...pageProps} />
    </Provider>

  );
}

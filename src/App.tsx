import React from 'react';

import Routes from '../src/Routes/Index';
import GlobalStyle from './global';
import  { AuthProvider } from '../src/Context/auth';

function App() {
  return (
    <>
      <AuthProvider>
          <GlobalStyle />
          <Routes />
      </AuthProvider>
    </>
  );
}
export default App;

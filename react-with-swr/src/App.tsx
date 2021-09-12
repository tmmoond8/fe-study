import React from 'react';
import { Layout } from 'notion-ui';
import { ChakraProvider } from '@chakra-ui/react';
import Aside from './components/Aside';
import GlobalStyles from './components/GlobalStyle';

function App() {
  return (
    <React.StrictMode>
      <GlobalStyles />
      <ChakraProvider>
        <Layout.App aside={<Aside />}>abc</Layout.App>
      </ChakraProvider>
    </React.StrictMode>
  );
}

export default App;

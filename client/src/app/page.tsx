import * as React from 'react';
import Today from "./Today/page";
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark' as 'dark',
  useSystemColorMode: false,
};

export default function Home() {
  return (
    <>
      <ColorModeScript initialColorMode={config.initialColorMode} />
      <ChakraProvider>
        <div className="h-screen w-full">
          <Today />
        </div>
      </ChakraProvider>
    </>
  );
}

import * as React from 'react';
import Today from "./Today/page";
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark' as 'dark', // Definindo o dark mode como padrão
  useSystemColorMode: false, // Ignora o tema do sistema operacional
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

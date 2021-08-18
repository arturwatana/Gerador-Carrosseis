import { AppProps } from 'next/dist/next-server/lib/router/router'
import { ChakraProvider, Flex } from "@chakra-ui/react"
import React from "react";


import Header from '../Components/Posts/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
      <ChakraProvider>
        <Header/>
        <Component {...pageProps} />
        
          
          
        
        
        </ChakraProvider>
        
  )
}

export default MyApp

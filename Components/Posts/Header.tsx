import { Flex, Button, useColorMode, useColorModeValue, HStack} from "@chakra-ui/react"
import {Li, Ul} from "../../styles/custom_styles"
import React from 'react';
import { useRouter } from 'next/router'
import Link from "next/link";

export default function Header(){

  const router = useRouter()
  const { toggleColorMode } = useColorMode() 
  const formBackground = useColorModeValue("gray.100", "gray.700")



  const navData = [
    {name:"Home", path: "./" },
    {name:"Carrossel Agile", path: "./carouselAgile" },
    {name:"Carrossel Live", path: "./carouselLive" },
    
]


  return (
    
    <HStack spacing="5px" justifyContent="center" mt={5} >
      
      
      {navData.map(item => (
        <Link href={item.path}><Button bgColor={item.path === `.${router.pathname}` ? "whiteAlpha.500" : "whiteAlpha.100"}>{item.name}</Button></Link>
      ))}
      
      
      <Button onClick={toggleColorMode} >Trocar tema</Button>
      
      
      
    </HStack>

    
    
  )
}
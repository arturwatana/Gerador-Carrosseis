
import { Flex, Heading, Input, InputGroup } from "@chakra-ui/react";
import { Div } from "../styles/custom_styles";



export  function Video() {

  return (
       <Div border="1px solid red">
       
      <InputGroup  maxWidth="300px" display="flex" flexDir="column" >
        <iframe src="https://player.vimeo.com/video/586893180" width="290" height="200" allow="autoplay; fullscreen"></iframe>
        <Input mt={1}name="" placeholder="Nome do Vídeo" />
        <Input id="" placeholder="ID do Vimeo"/>
       </InputGroup> 
       </Div>
    
  )
} 
import {
  FormLabel,
  Input,
  InputGroup,
  InputProps
} from "@chakra-ui/react"

interface JapaInputProps extends InputProps {
  label: string;
}

 export function InputForm({label, ...rest}: JapaInputProps){

  return (
    <InputGroup mt="6px"display="flex" flexDir="column">
    <FormLabel  fontSize="12px">{label}</FormLabel>
    <Input h="30px" w="250px"fontSize="12px" {...rest}></Input>
    </InputGroup>
  )
}


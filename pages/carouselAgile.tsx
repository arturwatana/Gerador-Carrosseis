import {FirstPost} from '../Components/Posts/FirstPost.js'
import { ChakraProvider } from "@chakra-ui/react"


export default function Home(){

  return (
    <div id="home">
    <h1>Olá</h1>
    <h2>Este é um teste de automação</h2>
    <input type="text"></input>
    <FirstPost/>
    </div>
  )
}
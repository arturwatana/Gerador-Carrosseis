import { Flex, Grid, Heading, Select, Text,FormLabel } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import {BlockWidth, H1} from "../styles/custom_styles"
import {InputForm} from "../Components/Input"
import {Video} from "../Components/Video"
import {  newHtml3 , newHtml6 } from "../Components/htmlFix";

const IndexPage = () => {
  
  const [nome, setNome] = useState("") 
  const [id, setId] = useState("") 
  const [qtdVideos, setQtdVideos] = useState("") 
  const [newHtml2, setHtml2] = useState("")
  const [newHtml4, setHtml4] = useState("")
  const [videosArray, setVideosArray] = useState(null) 
  const [Carousel, setCarousel] = useState("") 
  
  useEffect(()=>{

    console.log(newHtml3,newHtml6)
  }, [Carousel])

  useEffect(() => {

    let video = []

    for (let i = 1; i <= Number(qtdVideos); i++){
      video =[...video, {
        name: `video${i}`,
        id:`id${i}`
      }]
      setVideosArray(video)
      
    }
    console.log(videosArray)
  }, [qtdVideos])

  

    useEffect(() => {

      if(Carousel == ''){return }
      if(Carousel == 'semanas'){
      let newHtml2 = ''
      const nextLine = `
      `     
      let newHtml4 = ''

      for(var i = 1; i <= Number(qtdVideos); i++){
        newHtml2 +=`<li data-target="#carouselExampleIndicators${id}" data-slide-to="${i-1}" ${i === 1 ? 'class="active"' : '' }></li>${i !== Number(qtdVideos) ? nextLine : ""}`
        
        newHtml4 += `
        <div class="carousel-item active">
        <iframe src="https://player.vimeo.com/video/" allow="autoplay; fullscreen " allowfullscreen=" " width="640 " height="360 " frameborder="0 "></iframe>
        <div class="card-footer bg-transparent">
            <h5>Aula gravada 0${i}</h5>
            <p> Aula ${i < 10 ? `0${i}` : {i}} de ${i < 10 ? `0${i}` : {i}}</p>

        </div>

    </div>`

        
        setHtml2(newHtml2)
        setHtml4(newHtml4)
      }}
      
      if(Carousel == 'agileLive'){

        let newHtml2 = ''
        const nextLine = `
        `     
        let newHtml4 = ''
  
        for(var i = 1; i <= Number(qtdVideos); i++){
          newHtml2 +=`<li data-target="#carouselExampleIndicators${id}" data-slide-to="${i-1}" ${i === 1 ? 'class="active"' : '' }></li>${i !== Number(qtdVideos) ? nextLine : ""}`
        
        
        
        
        
          
      }}
    }, [qtdVideos])

    
  

  

 

  return (
  <Grid>
      
    <Flex height="500px" alignItems="center" justifyContent="center"  >

      <Flex mt={-150}direction="column"  p={12} rounded={6} >
      <Heading fontSize="25px" mb={12}>Gerador de Carrosseis</Heading>
      
      <InputForm  label="Id Carrossel" placeholder="ID Carrossel" onChange={(e)=>{setId(e.currentTarget.value)}} type="name"/>
      
      <Select placeholder="Selecione o tipo do Carrossel" size="sm" w={250} borderRadius="4px" id="typeCarousel" mt={4} onChange={(e)=>{setCarousel(e.currentTarget.value)}}>
        
        <option value="agileLive">Agile/Live</option>
        <option value="semanas">Semana 1,2,3</option>
      </Select>

      <InputForm  label="Nome da Aula" placeholder="Nome aula" id="nome_aula"onChange={(e)=>{setNome(e.currentTarget.value)}}/>

     { nome && id ? 
     <InputForm label="Quantidade de vídeos" placeholder="Qtd de videos"  onChange={(e)=>{setQtdVideos(e.currentTarget.value)}} id="qtd_videos"/>
     : <Text mt={2} textAlign="center"color="red">Preencha os campos acima</Text>}
      
      
      
      
      </Flex>
    
      
    </Flex>

    <Flex>
    <Grid maxWidth={"100%"} textAlign={'center'} templateColumns="repeat(3, 1fr)" gap={6}>
    
      
      {
        videosArray && 
        videosArray.map(()=>{
          return (
          <Video/> 
          )   
        })}



    </Grid>
    </Flex>
    <BlockWidth >

     

      <CopyBlock
          
          language="html"
          text={newHtml2+newHtml3+newHtml4+newHtml6}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
      /> 
    </BlockWidth>
    
  </Grid>
  )
  }

export default IndexPage;
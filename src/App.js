import React from 'react'
import Logo from './component/logo.png'

export default function App(){
  const nome=()=>{
    return('Richard Geraldo')
  }
      return(
        <>
        <p>CFB Cursos by {nome()}</p>
        <br/>
        <p>Curso de React</p>
          <img src={Logo} />
        </>
      )
}
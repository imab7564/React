import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';



function MyApp()
{
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}

//below is the custom approach
// const reactElement={
//   type:'a',
//   props:{
//     href:'//https://google.com',
//     target:'_blank'
//   },
//   children:'click me o visit google'
  
// }
//After parsing MyApp() gets converted into object then why not directly give object like reactElement
//but custom reactElement does not work here so make react element (not custom e.g below)

const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google'
)
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <MyApp />
  //  </StrictMode>,
  <App/>
  //when we call <App/> then output will be chai aur react with vite | Abhishek 
  //inside the curly braces what we write treated as variable 
  //reactElement
)

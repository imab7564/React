

import Chai from "./chai" 

function App() {
  const username="Abhishek"
  return (
    <>
    {/* it is called fragment */}
    <Chai />
    <h1>chai aur react with vite | {username}</h1>
    </>
  )
}

export default App

// Learned About Some Best Practices Using React
// -> Name the component capitalize e.g App.js
// -> We can name both App.js & App.jsx but in vite development environment we have to use jsx
// -> We can return only one component by a jsx function so it's good to wrap in <></> or <div></div>
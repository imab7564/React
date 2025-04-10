import { useCallback, useEffect, useState,useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const[numAllowed,setNumAllowed]=useState(false)
  const[charAllowed,setcharAllowed]=useState(false)
  const [psw,setPsw]=useState("")

  const [copied, setCopied] = useState(false)

  //useRef hook
  const passwordRef=useRef(null)

  const pswGenerator=useCallback(()=> {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed)
      str+="0123456789"
    if(charAllowed)
      str+="!@#$%^&*_-+=[]{}`~"

    for (let i = 1; i <= length; i++) {
      let idx=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(idx)
    }
    setPsw(pass)
  },[length,numAllowed,charAllowed,setPsw])

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    //passwordRef.current?.setSelectionRange(0,8)
    window.navigator.clipboard.writeText(psw)
    .then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500); // Reset after 1.5s
    });
  },[psw])

  //useEffect ka matlab ye h ki agar isme change ho to dobara se run karo
  useEffect(()=>{
    pswGenerator()
  },[length,numAllowed,charAllowed,pswGenerator])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text"
            value={psw}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
           />
           <button 
                onClick={copyPasswordToClipboard}
                className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
                {copied ? "Copied!" : "Copy"}
</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1 '>
          <input type="range"
          min={6} 
          max={50}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(Number(e.target.value))}}
          />
          <label >Length:{length}</label>
        </div>

        <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numAllowed}
          id="numberInput"
          onChange={() => {
              setNumAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setcharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>

      </div>
    </div>
    </>
  )
}

export default App

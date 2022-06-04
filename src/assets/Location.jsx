import React,{useEffect, useRef, useState} from 'react'
import Arrow from './Arrow'
import ArrowLocation from './ArrowForlocation'
import './Location.css'
import LocationSymbol from './LocationSymbol'
import SearchIcon from './SearchIcon'


function Location() {
    
const [Show, setShow] = useState(false)
const [Word, setWord] = useState('')

let menuRef= useRef()
  useEffect(() => {
  let handler = (event)=>{
      if(!menuRef.current.contains(event.target)){
            setShow(false)
            console.log(event);
      }
  }
  document.addEventListener("mousedown",handler)
  
  return () =>{
      document.removeEventListener("mousedown",handler)
  }
  })


const handleclick= ()=>{

    setShow(!Show)
}
const ClickKerala= ()=>{
setWord('Kerala')
}
const ClickKarnadaka = () =>{
    setWord('Karnadaka')
}
const ClickMumbai = () =>{
    setWord('Mumbai')
}
const ClickTamilnadu = () =>{
setWord('Tamilnadu')
}

  return (
<div ref={menuRef} className='main' >   
    <div onClick={(handleclick)} className="placeSearch">
        <SearchIcon></SearchIcon>
        <input
        type="text"
        
        placeholder={Word ? `${Word}`: 'Search city,area or locality'}
        />
        <span></span>
        <ArrowLocation set={Show} />
    </div>
   {Show && <div className='showorhide showhide1 '>
           <div className='popular111'>
           <p>POPULAR LOCATIONS</p>
           </div>
               <table>
                   <td onClick={(ClickKerala)}><LocationSymbol/> Kerala</td>
               </table>
               <table>
                   <td onClick={(ClickKarnadaka)}><LocationSymbol/> Karnadaka</td>
               </table>
               <table>
                   <td onClick={(ClickMumbai)}><LocationSymbol/> Mumbai</td>
               </table>
               <table>
                   <td onClick={(ClickTamilnadu)}><LocationSymbol/> Tamilnadu</td>
               </table>
          </div>}
</div> 
  )
}

export default Location
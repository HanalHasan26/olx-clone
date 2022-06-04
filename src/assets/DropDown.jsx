import React, { useState ,useEffect,useRef} from 'react'
import './DropDown.css'
import Arrow from './Arrow'
import Tick from './Tick'
export default function Dropdown (){
  const [Show, setShow] = useState(false)
  const [Lang,setLang] = useState('English')
  const [Ticks,SetTicks] = useState(true)

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

return(


    <div ref={menuRef} className='_2L_dh'>
        <div className="_2PDEF" onClick={()=>{
             setShow(!Show)
        }}>
            <div className="UFSX5">
                <span className="_38j0w">{Lang}</span>
                <span className="_2t8tU _2pSU8">
                    <button className="rui-1rYgw">
                        <Arrow set={Show}/>
                    </button>
                </span>
            </div>
        </div>
       {Show && <div className="_2dtTP">
            <div className="_3Wfs8 _2Jv6i _1u-oA">
                <ul>
                    <li onClick={()=>{
                         setLang('English')
                         SetTicks(true)
                    }}>
                        <span>English  
                        <span className="_3K1Q5">
                            <div className="rui-1rYgw">
                                {Ticks && <Tick/>}
                            </div>
                        </span>
                        </span>
                    </li>
                    <li onClick={()=>{
                         setLang('Hindi')
                         SetTicks(false)
                    }}>
                     <span>Hindi
                     <span className="_3K1Q5"> 
                     <div className="rui-1rYgw">
                    {!Ticks && <Tick/>}
                     </div>
                     </span>
                     </span>
                   </li>                   
                </ul>
            </div>
        </div>}
    </div>
           
)
}
 


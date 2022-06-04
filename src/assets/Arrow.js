import React from 'react'
import './Arrow.css'
export default function Arrow(props) {
    return ( <svg
        width="24px"
        height="24px"
        viewBox="0 0 1024 1024"
        data-aut-id="icon"
        className={'arrow'+(props.set ? 'view' :'')
        }
        fillRule="evenodd"
      >
        <path
          className="rui-4K4Y7"
          d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"
        />
      </svg>)
      
}
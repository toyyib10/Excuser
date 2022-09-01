import React from 'react'
import '../styles/button.css'

const Button = ({button ,category}) => {
  return (
    <div>
      <button type="button" onClick={() => button()} className="btn w-50 mb-3 fs-5 mt-2">{category}</button>
    </div>
  )
}

export default Button;

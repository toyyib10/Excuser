import {useEffect} from 'react';

const Display = ({header, message}) => {
  const display = {
    borderRadius : "15px",
    overflowY : "auto"
  }
  const color = {
    color : "rgb(134, 134, 226)"
  }
  return (
    <div style={display} className="col-10 h-100 bg-white pt-2">
      <h1 className="fs-1 mb-2" style={color}>{header}</h1>
      <div className="px-2 d-flex align-items-center justify-content-center align-items-center">
        {
        useEffect(() => {
          return () => {
            // <div class="spinner-border text-primary" role="status">
            //   <span class="visually-hidden">Loading...</span>
            // </div>
          }
        })
      }
        <p className="fs-1 m-0" style={color}>{message}</p>
      </div>
    </div>
  )
}

export default Display;

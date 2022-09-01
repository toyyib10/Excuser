import React from 'react'
import Button from './Button';

const Part = ({family , office, children, college, party}) => {
  return (
    <>
      <center>
        <h1 className="fs-1 text-white mb-5">Get Excuse</h1>
        <Button button={family} category="Family"/>
        <Button button={office} category="Office"/>
        <Button button={children} category="Children"/>
        <Button button={college} category="College"/>
        <Button button={party} category="Party"/>
      </center>
    </>
  )
}

export default Part;

import Part from "./Part";
import Display from "./Display";
import axios from 'axios';
import {useState} from 'react';

const Collection = () => {

  const familyUrl = "https://excuser.herokuapp.com/v1/excuse/family/"
  const officeUrl = "https://excuser.herokuapp.com/v1/excuse/office/"
  const childrenUrl = "https://excuser.herokuapp.com/v1/excuse/children/"
  const collegeUrl = "https://excuser.herokuapp.com/v1/excuse/college/"
  const partyUrl = "https://excuser.herokuapp.com/v1/excuse/party/"
  const [message, setExcuse] = useState('')
  const [header, setHeader] = useState('')
  const family = () => {
    axios.get(familyUrl).then((result) => {
      setHeader("Excuse for family")
      setExcuse(result.data[0].excuse)
    }).catch((err) => {
      setExcuse("Unable to connect try again later")
    })
  } 
  const office = () => {
    axios.get(officeUrl).then((result) => {
      setHeader("Excuse for office")
      setExcuse(result.data[0].excuse)
    }).catch((err) => {
      setExcuse("Unable to connect try again later")
    })
  } 
  const children = () => {
    axios.get(childrenUrl).then((result) => {
      setHeader("Excuse for children")
      setExcuse(result.data[0].excuse)
    }).catch((err) => {
      setExcuse("Unable to connect try again later")
    })
  } 
  const college = () => {
    axios.get(collegeUrl).then((result) => {
      setHeader("Excuse for college")
      setExcuse(result.data[0].excuse)
    }).catch((err) => {
      setExcuse("Unable to connect try again later")
    })
  } 
  const party = () => { 
    axios.get(partyUrl).then((result) => {
      setHeader("Excuse for party")      
      setExcuse(result.data[0].excuse)
    }).catch((err) => {
      setExcuse("Unable to connect try again later")
    })
  } 

  const myStyle = {
    height: "530px",
    backgroundColor : "rgb(16, 16, 65)",
    borderRadius : "10px"
  }
  return (
    <section style={myStyle} className="col-lg-9 col-md-9 col-11 text-white d-flex py-5 justify-content-around align-items-center">
      <div className="col-md-5 col-6 h-100">
        <Part family={family} office={office} children={children} college={college} party={party}/>
      </div>
      <div className="col-md-5 col-6 h-100 mb-2 mb-lg-0 mb-md-0">
        <Display header={header} message={message}/>
      </div>
    </section>
  )
}

export default Collection;

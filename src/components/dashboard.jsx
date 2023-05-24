import { Header } from './header'
import JsonData from '../data/data.json'
import { Footer } from './footer'
import { useState, useEffect } from 'react'
import axios from 'axios';
import React from 'react';
export const Dashboard = () => {
    
  const [landingPageData, setLandingPageData] = useState({})
  const [loandetails, setLoanDetails] = React.useState([])
  //const [open, setOpen] = React.useState(false);
  //const [err, setErr] = React.useState('')
  //const[accesstoken,setaccesstoken]=useState()
  //const results = [{"Name":"hi","Baytree__Status__c":"testt"}]
  useEffect(() => {
    setLandingPageData(JsonData)
    axios.post("https://cors-anywhere.herokuapp.com/https://pqzxwbqbi6.execute-api.eu-central-1.amazonaws.com/AccessToken",
    {
        
        
    }).then((res) => {
        console.log(res?.data.access_token)
        axios.get("https://cors-anywhere.herokuapp.com/https://pqzxwbqbi6.execute-api.eu-central-1.amazonaws.com/LoanDetails",
        { headers: { "Authorization": res?.data.access_token,"instance_url":res?.data.instance_url } }).then((res) => {
            const loanDetailsArray = []
            res.data.forEach((item) => {
              const newItem = {
                Name: item.Name,
                Baytree__Status__c: item.Baytree__Status__c
              }
              loanDetailsArray.push(newItem)
            })
            setLoanDetails(loanDetailsArray)       
           
         
          
       
    }).catch((err) => {
        if (err) {
            console.log(err?.message)
            //setErr(err?.message)
            //setOpen(true)
        }
    }) }).catch((err) => {
        if (err) {
            console.log(err?.message)
           // setErr(err?.message)
           // setOpen(true)
        }
    })
  }, [])
  return (
    <>
      
      <Header  data={landingPageData.Header}/>
      <table className='table table-striped tbl'>
        <thead>
            <tr>
                <th>Loan Name</th>
                <th>Status</th>
               
            </tr>
            </thead>
            <tbody>
            
            {loandetails.map(( loandetail, index ) => {
                console.log(loandetail)
          return (
            <tr key={index}>
               <td>{loandetail.Name}</td>
                <td>{loandetail.Baytree__Status__c}</td>
            </tr>
          );
        })}
         
        </tbody>
      </table>
      <Footer />
    </>
  )
}
import React from 'react';
import { useState } from 'react';
import FormStyles from '../styles/Form.module.css'

const form = () => {
    const [data, setData]=useState({
        name:'',
        email:'',
        message:''
    })
    const changeHandler =(e)=>{
        setData({...data, [e.target.name]:e.target.value})
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        alert('Data Posted');
        e.target.reset();
    }
  return (
    <div className={FormStyles.container}>
        <form onSubmit={e=> submitHandler(e)} autoComplete="off">
            <label>Name</label> <br/>
            <input className={FormStyles.inputtext} type="text" name="name" onChange={e =>changeHandler}></input><br/>
            <label>Email</label> <br/>
            <input className={FormStyles.inputtext} type="text" name="email" onChange={e =>changeHandler}></input><br/>
            <label>Message</label> <br/>
            <input className={FormStyles.inputtext} type="text" name="message" onChange={e =>changeHandler}></input><br/>
            <input className={FormStyles.inputsubmit} type="submit" name="Submit" onChange={e =>changeHandler}></input>
        </form>
      
    </div>
  )
}

export default form
